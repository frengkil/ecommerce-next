import React from 'react'
import { TooltipProvider, Tooltip } from './ui/tooltip';

interface Props{
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const SocialMedia = () => {
  return <TooltipProvider>
    <Tooltip></Tooltip>

  </TooltipProvider>
}

export default SocialMedia;