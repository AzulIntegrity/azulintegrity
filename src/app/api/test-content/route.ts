import { NextResponse } from 'next/server';
import { getHomepageContent, validateContentFiles } from '@/lib/content';

export async function GET() {
  try {
    // First validate that all files exist
    const validation = validateContentFiles();
    
    if (!validation.valid) {
      return NextResponse.json({
        success: false,
        error: 'Missing content files',
        missing: validation.missing
      }, { status: 400 });
    }
    
    // Load all homepage content
    const content = getHomepageContent();
    
    return NextResponse.json({
      success: true,
      message: 'Content loaded successfully',
      data: {
        sectionsLoaded: Object.keys(content),
        heroTitle: content.hero.title,
        serviceCount: content.services.services.length,
        testimonialCount: content.testimonials.testimonials.length,
        badgeCount: content.certifications.badges.length
      }
    });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to load content',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}