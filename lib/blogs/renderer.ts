import * as cheerio from "cheerio";

export const htmlParser = (html: string) => {
  const $ = cheerio.load(html);
  const modifiedHtml = addIdsToHeadings($);
  const toc = getTOC($);
  const readTime = calculateReadingTime($)

  return { modifiedHtml, toc, readTime };
};

export type TOC = { 
  id: string;
  text: string;
  level: number;
} [];

const HeadingToLevelMap: { [key: string]: number } = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6,
};

const addIdsToHeadings = ($: cheerio.CheerioAPI) => {
  // Traverse each heading and add an ID
  $("h1, h2, h3, h4, h5, h6").each((index, element) => {
    const headingText = $(element).text();
    const headingId = headingText
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w-]/g, "") // Remove invalid characters
      .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
    $(element).attr("id", headingId);
    console.log($(element).html());
  });

  // Get the modified HTML
  const modifiedHtml = $.html();
  return modifiedHtml;
};

const getTOC = ($: cheerio.CheerioAPI) => {
  const tocItems: TOC = [];
  $("h1, h2, h3, h4, h5, h6").each((_, element) => {
    const id =
      $(element).attr("id") ||
      $(element).text().toLowerCase().replace(/\s+/g, "-");
    const headingTag = element.tagName;
    const level = HeadingToLevelMap[headingTag] || 1;

    const text = $(element).text().replace(/\n/g, "").trim();

    // Add an id if not present
    if (!$(element).attr("id")) {
      $(element).attr("id", id);
    }

    tocItems.push({ id, text, level });
  });
  return tocItems;
};

 function calculateReadingTime($:cheerio.CheerioAPI) {
    const text = $('body').text();
    
    // Calculate the number of words
    const wordCount = text.split(/\s+/).length;

    // Assume average reading speed of 200 words per minute
    const readingSpeed = 200;
    const readingTime = Math.ceil(wordCount / readingSpeed);
    return readingTime

}
