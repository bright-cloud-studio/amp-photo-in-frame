<?php

/**
 * Bright Cloud Studio's Amp Photo-in-Frame
 *
 * Copyright (C) 2023 Bright Cloud Studio
 *
 * @package    bright-cloud-studio/amp-photo-in-frame
 * @link       https://www.brightcloudstudio.com/
 * @license    http://opensource.org/licenses/lgpl-3.0.html
**/

/* Add custom jquery to the backend */
if (TL_MODE == 'BE')
{
  $GLOBALS['TL_JAVASCRIPT']['smg']		= 'system/modules/modal_gallery/assets/js/modal_gallery_backend.js';
}
