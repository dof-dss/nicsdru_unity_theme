<?php

function nicsdru_unity_theme_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  // Settings to disable Google Analytics tracking.
  if (\Drupal::moduleHandler()->moduleExists('google_analytics')) {

    $ga_account = \Drupal::config('google_analytics.settings')->get('account');

    if (!empty($ga_account)) {

      $form['ga_tracking_options'] = [
        '#type' => 'details',
        '#title' => t('Google Analytics tracking'),
        '#open' => TRUE,
      ];

      $form['ga_tracking_options']['ga_tracking_disabled'] = [
        '#type' => 'checkbox',
        '#title' => t('Disable Google Analytics tracking'),
        '#default_value' => theme_get_setting('ga_tracking_disabled'),
      ];

      $form['ga_tracking_options']['ga_tracking_disabled_eu'] = [
        '#type' => 'checkbox',
        '#title' => t('Only disable if EU Cookie Compliance consent is not given'),
        '#default_value' => theme_get_setting('ga_tracking_disabled_eu'),
      ];

      // Prevent the setting of the EU Cookie Compliance option if that module
      // is not installed.
      if (\Drupal::moduleHandler()->moduleExists('eu_cookie_compliance') === FALSE) {
        $form['ga_tracking_options']['ga_tracking_disabled_eu']['#disabled'] = TRUE;
        $form['ga_tracking_options']['ga_tracking_disabled_eu']['#default_value'] = FALSE;
        $form['ga_tracking_options']['ga_tracking_disabled_eu']['#title'] .= t(' (EU Cookie Compliance module is NOT installed)');
      }
    }
  }
}
