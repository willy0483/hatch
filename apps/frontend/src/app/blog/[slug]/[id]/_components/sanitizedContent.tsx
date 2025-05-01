"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

type Props = {
  content: string;
  className?: string;
};

const SanitizedContent = ({ content, className }: Props) => {
  const [cleanHtml, setCleanHtml] = useState<string>("");

  useEffect(() => {
    const sanitized = DOMPurify.sanitize(content);
    setCleanHtml(sanitized);
  }, [content]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default SanitizedContent;
