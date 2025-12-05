// Test script to verify content loading functions work correctly
import { 
  getHomepageContent, 
  validateContentFiles,
  getHeroContent,
  getServicesContent 
} from './content';

// Test function
export function testContentLoading() {
  try {
    console.log('Testing content file validation...');
    const validation = validateContentFiles();
    console.log('Validation result:', validation);
    
    if (!validation.valid) {
      console.error('Missing files:', validation.missing);
      return false;
    }
    
    console.log('Testing individual content loading...');
    
    // Test hero content
    const heroContent = getHeroContent();
    console.log('Hero content loaded:', {
      title: heroContent.title,
      subtitle: heroContent.subtitle,
      hasCtaText: !!heroContent.cta_text
    });
    
    // Test services content
    const servicesContent = getServicesContent();
    console.log('Services content loaded:', {
      section_title: servicesContent.section_title,
      serviceCount: servicesContent.services.length,
      firstService: servicesContent.services[0]?.title
    });
    
    console.log('Testing full homepage content loading...');
    const homepageContent = getHomepageContent();
    console.log('Homepage content sections loaded:', Object.keys(homepageContent));
    
    console.log('✅ All content loading tests passed!');
    return true;
    
  } catch (error) {
    console.error('❌ Content loading test failed:', error);
    return false;
  }
}