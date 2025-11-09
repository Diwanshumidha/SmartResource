import { PageObjectResponse, UserObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const DEFAULT_COVER_IMAGE = "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
export class NotionPageParser {
    
    static getTitle(page: PageObjectResponse, propertyName: string) {
      const property = page.properties[propertyName];
      if (property.type === "title" && property.title.length > 0) {
        return property.title[0].plain_text;
      }
      return "";
    }
  
    static getRichText(page: PageObjectResponse, propertyName: string) {
      const property = page.properties[propertyName];
      if (property.type === "rich_text" && property.rich_text.length > 0) {
        return property.rich_text[0].plain_text;
      }
      return "";
    }
  
    static getMultiSelect(page: PageObjectResponse, propertyName: string) {
      const property = page.properties[propertyName];
      if (property.type === "multi_select") {
        return property.multi_select.map(tag => tag.name);
      }
      return [];
    }
  
    static getStatus(page: PageObjectResponse, propertyName: string) {
      const property = page.properties[propertyName];

      if (property.type === "status") {
        return property.status?.name || "Created";
      }
      return "Created";
    }
  
    static getUpdatedAt(page: PageObjectResponse, propertyName: string) {
      const property = page.properties[propertyName];
      if (property.type === "last_edited_time") {
        return property.last_edited_time;
      }
      return null;
    }
  
    static getCreatedBy(page: PageObjectResponse, propertyName: string) {
      const property = page.properties[propertyName];
      if (property.type === "created_by" && property.created_by.object === "user") {
        return property.created_by as UserObjectResponse;
      }
      return null;
    }
  
    static getCreatedAt(page: PageObjectResponse, propertyName: string) {
      const property = page.properties[propertyName];
      if (property.type === "created_time") {
        return property.created_time;
      }
      return null;
    }
  
    static getFormula(page: PageObjectResponse, propertyName: string) {
      const property = page.properties[propertyName];
      if (property.type === "formula") {
        switch (property.formula.type) {
          case "number":
            return property.formula.number;
          case "string":
            return property.formula.string;
        }
      }
      return null;
    }

    static getCoverImage(page: PageObjectResponse) {
        const cover = page.cover;
        if(!cover) return DEFAULT_COVER_IMAGE;

        if (cover.type === "external" && cover.external.url) {
          return cover.external.url;
        }

        if(cover.type === "file" && cover.file.url) {
          return cover.file.url;
        }
        
        return DEFAULT_COVER_IMAGE;
    }
  
    static normalizePage(page: PageObjectResponse) {
      return {
        id: page.id,
        title: this.getTitle(page, "Title"),
        description: this.getRichText(page, "Description"),
        tags: this.getMultiSelect(page, "Tags"),
        slug: this.getFormula(page, "slug"),
        author: this.getCreatedBy(page, "Author"),
        created: this.getCreatedAt(page, "CreatedAt"),
        updated: this.getUpdatedAt(page, "UpdatedAt"),
        status: this.getStatus(page, "Status"),
        cover:this.getCoverImage(page),
      };
    }
  }
  
  // Now you can use the ReturnType
export type NormalizedPageType = ReturnType<typeof NotionPageParser.normalizePage>;