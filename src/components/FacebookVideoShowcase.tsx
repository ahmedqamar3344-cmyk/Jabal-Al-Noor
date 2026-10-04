import React from 'react';
import { FieldOperationsGallery } from './FieldOperationsGallery';
import { Language } from '../types';

interface FacebookVideoShowcaseProps {
  lang: Language;
}

export const FacebookVideoShowcase: React.FC<FacebookVideoShowcaseProps> = ({ lang }) => {
  return <FieldOperationsGallery lang={lang} />;
};

export default FacebookVideoShowcase;
