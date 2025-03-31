/**
 * UI Components for Office Pal Education Management System
 * 
 * This file exports all UI components used in the Office Pal platform.
 * Only include components that are actively used in the project.
 */

// Core UI Components
export { Button, buttonVariants } from './button'
export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './card'

// Form Elements - used by the application
export { Label } from './label'
// Form component is used and imports Label internally
export * from './form' 