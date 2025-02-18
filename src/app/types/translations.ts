export interface BlogPost {
  title: string;
  description: string;
  content: {
    intro: string;
    [key: string]: string | string[] | { 
      title: string;
      description?: string;
      items: string[];
    };
  };
}

export interface TranslationSchema {
  common: {
    title: string;
    description: string;
    nav: {
      home: string;
      blog: string;
      about: string;
      language: string;
    };
    dropzone: {
      title: string;
      description: string;
      accept: string;
    };
    conversion: {
      progress: string;
      success: string;
      error: string;
      download: string;
      processing: string;
    };
  };
  blog: {
    title: string;
    description: string;
    read_more: string;
    posts: {
      understanding_csv_excel: BlogPost;
      batch_conversion: BlogPost;
      data_security: BlogPost;
    };
  };
  about: {
    title: string;
    description: string;
    features: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
    tech: {
      title: string;
    };
  };
  footer: {
    title: string;
    copyright: string;
    resources: {
      tools: string;
      converters: string;
      data: string;
    };
    quick_links: {
      main: string;
      blog: string;
      help: string;
      documentation: string;
      faq: string;
      support: string;
    };
  };
  docs: {
    title: string;
    description: string;
    sections: {
      getting_started: {
        title: string;
        description: string;
        items: string[];
      };
      features: {
        title: string;
        description: string;
        items: string[];
      };
      advanced: {
        title: string;
        description: string;
        items: string[];
      };
    };
  };
  faq: {
    title: string;
    description: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  support: {
    title: string;
    description: string;
    contact: {
      title: string;
      description: string;
      email: string;
      github: string;
    };
    resources: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
} 