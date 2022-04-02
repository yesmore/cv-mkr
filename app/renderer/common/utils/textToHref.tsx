import React from 'react';

/**
 * @description 普通文本转超链接
 */
export function textToHref(text: string, href: string): string {
  return <a href={href}>{text}</a>;
}
