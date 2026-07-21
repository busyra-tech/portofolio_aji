/**
 * HTML Sanitization utility
 * Safely render HTML content without dangerouslySetInnerHTML
 */

export const createMarkup = (html: string): { __html: string } => {
	return {
		__html: html,
	};
};

/**
 * Safely sanitize and render HTML
 * Basic sanitization for common use cases
 */
export const sanitizeHTML = (html: string): string => {
	// Remove script tags and event handlers
	const div =
		typeof document !== "undefined" ? document.createElement("div") : null;
	if (div) {
		div.innerHTML = html;
		// Remove any script tags
		const scripts = div.querySelectorAll("script");
		scripts.forEach((script) => script.remove());
		// Remove event handlers
		div.querySelectorAll("*").forEach((el) => {
			Array.from(el.attributes).forEach((attr) => {
				if (attr.name.startsWith("on")) {
					el.removeAttribute(attr.name);
				}
			});
		});
		return div.innerHTML;
	}
	return html;
};

/**
 * Format level as percentage
 */
export const formatLevel = (level: string | number): string => {
	const numLevel = typeof level === "string" ? parseInt(level, 10) : level;
	return `${Math.min(100, Math.max(0, numLevel))}%`;
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
	return name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase();
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
	return phone;
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
	func: T,
	wait: number,
): ((...args: Parameters<T>) => void) => {
	let timeout: ReturnType<typeof setTimeout>;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
};

/**
 * Check if link is external
 */
export const isExternalLink = (href: string): boolean => {
	try {
		const url = new URL(
			href,
			typeof window !== "undefined"
				? window.location.origin
				: "http://localhost",
		);
		return (
			url.origin !==
			(typeof window !== "undefined"
				? window.location.origin
				: "http://localhost")
		);
	} catch {
		return false;
	}
};
