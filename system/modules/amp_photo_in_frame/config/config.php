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
    $GLOBALS['TL_JAVASCRIPT']['amp_photo_in_frame']    = 'system/modules/amp_photo_in_frame/assets/js/amp_photo_in_frame_backend.js';
    $GLOBALS['TL_JAVASCRIPT']['jquery']    = 'https://code.jquery.com/jquery-3.4.1.js';
}
