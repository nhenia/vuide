/**
 * Service for reporting runtime errors to GitHub Issues.
 */
export async function reportRuntimeError(error: Error, errorInfo?: any) {
  console.error("Caught runtime error:", error, errorInfo);

  const issueTitle = `Runtime Error: ${error.message}`;
  const issueBody = `
## Runtime Error Report
**Message:** ${error.message}
**Stack:**
\`\`\`
${error.stack}
\`\`\`
**Component Stack:**
\`\`\`
${errorInfo?.componentStack || 'N/A'}
\`\`\`
**User Agent:** ${navigator.userAgent}
**Timestamp:** ${new Date().toISOString()}
`;

  // For a static site, we can't safely store a GitHub Token.
  // We provide a link to create an issue with pre-filled content as a fallback,
  // or attempt to call a custom endpoint if one were provided.

  const reportUrl = `https://github.com/user/repo/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;

  // In a real scenario, we might POST to a serverless function that has the GH_TOKEN
  console.log("To report this error, visit:", reportUrl);

  // We can also try to trigger a repository dispatch if we had a proxy
}
