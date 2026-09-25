# NICS Unity Theme.
NICS Unity Theme is a base theme for corporate and public-sector websites. It
uses the contributed Stable theme as its base theme and supports Drupal 11.3
and later.

## Drupal compatibility.
This theme is compatible with Drupal 11.3 and later.

## Getting started.
- Install the theme with composer: - `composer require 'dof-dss/nicsdru_unity_theme:^0.1.0'`

## Sub theming.
As is standard practice with a Drupal theme, amendments should not be made to the base theme, rather a sub theme should be created and additional theming applied to it.
- Create a sub theme by cloning the STARTERKIT directory and re-naming the references to 'STARTERKIT' to the name of the new sub theme.
- Update the values for variables in the init file
- In a terminal shell, cd to the cloned STARTERKIT directory and run `npm install`, then run `npm build`
- Enable the new sub theme
