'use client';
import { useState } from 'react';
import { AlertCircle } from "lucide-react"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import Head from 'next/head';
import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-progressbar';
import { Circles } from 'react-loader-spinner';
import { Card, CardFooter, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Alert, AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";


export default function Home() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const invalidFiles = selectedFiles.filter(file => file.type !== 'text/csv');

    if (invalidFiles.length > 0) {
      console.log("Please upload only CSV files.!!!!!")
      setError('Please upload only CSV files.');
      setFiles([]);
      return;
    }

    setFiles(selectedFiles);
    setError('');
    setSuccessMessage('');
  };

  const handleConvert = () => {
    if (files.length === 0) {
      setError('Please upload CSV files first.');
      return;
    }

    setError('');
    setLoading(true);
    setProgress(0);
    setConvertedFiles([]);
    setSuccessMessage('');

    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          const newWorkbook = XLSX.utils.book_new();
          const newWorksheet = XLSX.utils.aoa_to_sheet(excelData);
          XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Sheet1');

          const excelBuffer = XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'array' });
          const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

          setConvertedFiles((prev) => [...prev, { name: `${file.name.split('.csv')[0]}.xlsx`, blob }]);

          // Update progress
          setProgress(((index + 1) / files.length) * 100);

          // If all files are processed, stop loading
          if (index === files.length - 1) {
            setLoading(false);
            setSuccessMessage('All files have been successfully converted!');
          }
        } catch (error) {
          setError(`Error processing file: ${file.name}`);
          setLoading(false);
        }
      };
      reader.readAsBinaryString(file);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <Head>
        <title>CSV to Excel Converter Free</title>
        <meta name="description" content="Free Convert your CSV files to Excel format easily and quickly." />
        <meta name="keywords" content="CSV, Excel, Converter, Batch Conversion, Free" />
        <meta name="author" content="Jack Zhu" />
      </Head>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold text-black">Batch CSV to Excel Converter</h1>
        </CardHeader>
        <CardContent>
          {error && <Alert variant="destructive" className="mb-4">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription className="mb-4 font-bold text-red">
              {error}
            </AlertDescription>
          </Alert>}
          {/* {error && <Alert type="error" message={error} className="mb-4 font-bold text-red" />} */}

          {/* {successMessage && <Alert type="success" message={successMessage} className="mb-4 font-bold text-black" />} */}
          {successMessage && <Alert className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription className="mb-4 font-bold text-black">
              {successMessage}
            </AlertDescription>
          </Alert>}
          <Input
            type="file"
            accept=".csv"
            multiple
            onChange={handleFileChange}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          {loading && (
            <div className="flex flex-col items-center">
              <Circles color="#00BFFF" height={80} width={80} className="mb-4" />
              <ProgressBar
                completed={progress}
                className="w-full"
                bgcolor="#4CAF50"
                basebgcolor="#e0e0de"
                height="10px"
                labelalignment="center"
                labelcolor="#ffffff"
                labelsize="14px"
              />
            </div>
          )}
          {convertedFiles.length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-bold text-black mb-2">Download Converted Files:</h2>
              <ul className="list-disc list-inside">
                {convertedFiles.map((file, index) => (
                  <li key={index} className="text-black">
                    <a
                      href={URL.createObjectURL(file.blob)}
                      download={file.name}
                      className="text-blue-200 hover:text-blue-400"
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-center">
          <Button
            onClick={handleConvert}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mb-4"
            disabled={loading}
          >
            {loading ? 'Converting...' : 'Convert to Excel'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}