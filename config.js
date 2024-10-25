export const config = {
  domainSource: "https://eventi.quivo.it/",
  patterns: [
      {
          pattern: "/[^/]+",
          metaDataEndpoint: "https://sysazaxpkaruieidjojq.supabase.co/rest/v1/events?select=title,meta_description,image,meta_keywords,created_at,code&code=eq.{code}"
      }      
      // Add more patterns and their metadata endpoints as needed
  ]
};
