/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerColor } from 'vs/platform/theme/common/colorRegistry';
import { Color, RGBA } from 'vs/base/common/color';
import * as nls from 'vs/nls';


export const tileBoxShadowColor = new Color(new RGBA(0, 1, 4, 0.13));
export const tileBoxShadowHoverColor = new Color(new RGBA(0, 3, 8, 0.14));
export const textShadow = new Color(new RGBA(0, 0, 0, 0.25));
export const dropdownBoxShadow = new Color(new RGBA(0, 0, 0, 0.25));
export const extensionPackGradientOne = new Color(new RGBA(50, 49, 48, 0.55));
export const extensionPackGradientTwo = new Color(new RGBA(50, 49, 48, 0));

// -- Welcome Page Colors
export const tileBorder = registerColor('tileBorder', { light: '#fff', dark: '#8A8886', hc: '#2B56F2' }, nls.localize('tileBorder', "The border color of tiles"));
export const tileBoxShadow = registerColor('tileBoxShadow', { light: tileBoxShadowColor, dark: tileBoxShadowColor, hc: tileBoxShadowColor }, nls.localize('tileBoxShadow', "The tile box shadow color"));
export const buttonSecondaryBorder = registerColor('buttonSecondaryBorder', { light: '#8A8886', dark: '#FFF', hc: '#264BD3' }, nls.localize('buttonSecondaryBorder', "The border color for secondary button"));
export const buttonSecondaryBackground = registerColor('button.secondaryBackground', { light: null, dark: null, hc: null }, nls.localize('button.secondaryBackground', "The background color for the secondary button"));
export const buttonSecondary = registerColor('buttonSecondary', { light: '#323130', dark: '#fff', hc: '#fff' }, nls.localize('buttonSecondary', "The font color for secondary button"));
export const buttonSecondaryHoverColor = registerColor('buttonSecondaryHover', { light: '#0078D4', dark: '#3794ff', hc: '#3794ff' }, nls.localize('buttonSecondaryHover', "The hover color for secondary buttons"));
export const hoverShadow = registerColor('buttonDropdownBoxShadow', { light: dropdownBoxShadow, dark: dropdownBoxShadow, hc: dropdownBoxShadow }, nls.localize('buttonDropdownBoxShadow', "The button dropdown box shadow color"));
export const buttonDropdownBackgroundHover = registerColor('buttonDropdownBackgroundHover', { light: '#3062d6', dark: '#3062d6', hc: '#3062d6' }, nls.localize('buttonDropdownBackgroundHover', "The button dropdown background hover color"));
export const extensionPackHeaderShadow = registerColor('extensionPackHeaderShadow', { light: textShadow, dark: textShadow, hc: textShadow }, nls.localize('extensionPackHeaderShadow', "The extension pack header text shadowcolor"));
export const extensionPackGradientColorOneColor = registerColor('extensionPackGradientColorOne', { light: extensionPackGradientOne, dark: extensionPackGradientOne, hc: extensionPackGradientOne }, nls.localize('extensionPackGradientColorOne', "The top color for the extension pack gradient"));
export const extensionPackGradientColorTwoColor = registerColor('extensionPackGradientColorTwo', { light: extensionPackGradientTwo, dark: extensionPackGradientTwo, hc: extensionPackGradientTwo }, nls.localize('extensionPackGradientColorTwo', "The bottom color for the extension pack gradient"));

export const gradientOneColorOne = new Color(new RGBA(0, 0, 0, .2));

export const gradientTwoColorOne = new Color(new RGBA(156, 48, 48, 0));
export const gradientTwoColorTwo = new Color(new RGBA(255, 255, 255, 0.1));

export const gradientOne = registerColor('gradientOne', { light: '#f0f0f0', dark: gradientOneColorOne, hc: gradientOneColorOne }, nls.localize('gradientOne', "The top color for the banner image gradient"));
export const gradientTwo = registerColor('gradientTwo', { light: gradientTwoColorOne, dark: gradientTwoColorTwo, hc: gradientTwoColorTwo }, nls.localize('gradientTwo', "The bottom color for the banner image gradient"));
export const gradientBackground = registerColor('gradientBackground', { light: '#fff', dark: 'transparent', hc: 'transparent' }, nls.localize('gradientBackground', "The background color for the banner image gradient"));


export const disabledButton = registerColor('disabledButton', { light: '#A19F9D', dark: '#797775', hc: '#797775' }, nls.localize('disabledButton', "The color for a secondary disabled button"));
export const disabledButtonBackground = registerColor('disabledButtonBackground', { light: '#F3F2F1', dark: '#252423', hc: '#252423' }, nls.localize('disabledButtonBackground', "The background color for secondary disabled button"));
