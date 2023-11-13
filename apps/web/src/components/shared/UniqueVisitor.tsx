'use client';

import Cookies from 'js-cookie';
import { useEffect } from 'react';

const NUMBER_OF_DAYS = 30;
const UNIQUE_VISITOR_COOKIE_KEY = 'uniqueVisitor';

function checkIfUniqueVisitor() {
  // check if we are in the browser
  if (typeof window === 'undefined') return false;

  const hasPreviouslyVisited = Cookies.get(UNIQUE_VISITOR_COOKIE_KEY);
  if (hasPreviouslyVisited) return false;

  Cookies.set(UNIQUE_VISITOR_COOKIE_KEY, 'true', { expires: NUMBER_OF_DAYS });

  return true;
}

export default function UniqueVisitor() {
  useEffect(() => {
    if (checkIfUniqueVisitor()) {
      fetch('/api/unique-visitor');
    }
  });

  return null;
}
