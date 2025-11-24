import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function currencyFormatter(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
}

export function numberFormatter(amount: number) {
    return new Intl.NumberFormat("en-US").format(amount);
}

export function dateFormatter(date: string | Date) {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
    return formattedDate;
}



export function sanitizeFileName(fileName: string) {
    return encodeURIComponent(fileName.toLowerCase().trim().replace(/\s+/g, " "));
}

function sanitize(filename: string) {
    // Replace unsafe characters with a hyphen
    const sanitized = filename.replace(/[/\\?%*:|"<>]/g, "-");

    // Remove leading and trailing spaces and dots
    const trimmed = sanitized.trim().replace(/^\.+|\.+$/g, "");

    // Replace spaces with a single hyphen
    const normalized = trimmed.replace(/\s+/g, "-");

    // Ensure filename is not empty after sanitization
    if (normalized.length === 0) {
        throw new Error("Filename results in an empty string");
    }

    return normalized.toLowerCase();
}

export function generateUniqueFilename(
    userId: string,
    originalFilename: string
) {
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
    const sanitizedFilename = sanitize(originalFilename)
        .toLowerCase()
        .replace(/\s+/g, "_");
    const extension = originalFilename.split(".").pop();
    const uniqueFilename = `${userId}__${sanitizedFilename}__${timestamp}.${extension}`;
    return uniqueFilename;
}

export function daysLeft(futureDate: string | Date) {
    // Get the current date
    const currentDate = new Date();

    // Get the future date
    const future = new Date(futureDate);

    // Calculate the difference in milliseconds
    const diffInMilliseconds = future.getTime() - currentDate.getTime();

    // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

    return diffInDays;
}

// export function calculateExpectedTime(numberOfPages: number) {
//   const variable = 3.5;
//   const variableTime = variable * numberOfPages;
//   const fixedTime = 0.2;
//   return (variableTime + fixedTime).toFixed(2);
// }

export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === "string") {
                const base64String = reader.result.split(",")[1]; // Remove the data:application/pdf;base64 prefix
                resolve(base64String);
            } else {
                reject(new Error("Failed to read file as base64"));
            }
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(file);
    });
};

export const AbsoluteUrl = (path: string) => {
    const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    return `${NEXT_PUBLIC_BASE_URL}/${path}`
}
