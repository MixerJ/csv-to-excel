import * as XLSX from 'xlsx';

export interface ConversionResult {
  success: boolean;
  fileName: string;
  error?: string;
  excelBlob?: Blob;
}

export const convertCSVToExcel = async (file: File): Promise<ConversionResult> => {
  try {
    const text = await file.text();
    const workbook = XLSX.read(text, { type: 'string' });
    
    // Apply some styling to make it look better
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Add some basic styling
    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');
    const headerStyle = {
      fill: { fgColor: { rgb: "4F46E5" } }, // Indigo color
      font: { color: { rgb: "FFFFFF" }, bold: true },
      alignment: { horizontal: "center" }
    };
    
    // Apply header style to first row
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cell = worksheet[XLSX.utils.encode_cell({ r: 0, c: C })];
      if (cell) cell.s = headerStyle;
    }
    
    // Auto-size columns
    const columnWidths: number[] = [];
    for (let C = range.s.c; C <= range.e.c; ++C) {
      let maxLength = 0;
      for (let R = range.s.r; R <= range.e.r; ++R) {
        const cell = worksheet[XLSX.utils.encode_cell({ r: R, c: C })];
        if (cell && cell.v) {
          const length = cell.v.toString().length;
          maxLength = Math.max(maxLength, length);
        }
      }
      columnWidths[C] = maxLength + 2; // Add some padding
    }
    worksheet['!cols'] = columnWidths.map(width => ({ width }));

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });

    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    return {
      success: true,
      fileName: file.name.replace('.csv', '.xlsx'),
      excelBlob: blob
    };
  } catch (error) {
    return {
      success: false,
      fileName: file.name,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}; 