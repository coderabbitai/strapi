import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBullets extends Schema.Component {
  collectionName: 'components_components_bullets';
  info: {
    displayName: 'Bullet';
    description: '';
  };
  attributes: {
    Text: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.'>;
    Description: Attribute.RichText;
  };
}

export interface ComponentsContactSuccess extends Schema.Component {
  collectionName: 'components_components_contact_successes';
  info: {
    displayName: 'Contact Success';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String & Attribute.DefaultTo<'Hooray! '>;
    Description: Attribute.RichText &
      Attribute.DefaultTo<'Your message has been sent. We\u2019ll get back to you shortly.'>;
    Button: Attribute.Component<'components.link'>;
    SocialsTitle: Attribute.String &
      Attribute.DefaultTo<'In the meantime, follow along:'>;
    Socials: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsFaqItem extends Schema.Component {
  collectionName: 'components_components_faq_items';
  info: {
    displayName: 'Faq Item';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.RichText;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Feature title'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Bullets: Attribute.Component<'components.bullets', true>;
    ImageXL: Attribute.Media;
    ImageLG: Attribute.Media;
    ImageMD: Attribute.Media;
    ImageSM: Attribute.Media;
  };
}

export interface ComponentsFormSideSection extends Schema.Component {
  collectionName: 'components_components_form_side_sections';
  info: {
    displayName: 'Form Side Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    ListTitle: Attribute.String;
    Bullets: Attribute.Component<'components.bullets', true>;
  };
}

export interface ComponentsHowItWorks extends Schema.Component {
  collectionName: 'components_components_how_it_works';
  info: {
    displayName: 'How It Works';
    description: '';
  };
  attributes: {
    Tab: Attribute.String & Attribute.DefaultTo<'SaaS'>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Effortless Scaling with SaaS'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'This is placeholder content. Leverage the power of CodeRabbit\u2019s cloud-based solution with SaaS. Access real-time code reviews, automated suggestions, and seamless integration with your development pipeline\u2014all without the need to manage your own infrastructure. '>;
    Image: Attribute.Media;
    Bullets: Attribute.Component<'components.bullets', true>;
  };
}

export interface ComponentsInputCheckboxField extends Schema.Component {
  collectionName: 'components_components_input_checkbox_fields';
  info: {
    displayName: 'Input Checkbox Field';
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<'Label'>;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentsInputSelectField extends Schema.Component {
  collectionName: 'components_components_input_select_fields';
  info: {
    displayName: 'Input Select Field';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<'Label'>;
    Placeholder: Attribute.String & Attribute.DefaultTo<'Placeholder'>;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    Options: Attribute.Component<'components.newsletter', true>;
  };
}

export interface ComponentsInputTextField extends Schema.Component {
  collectionName: 'components_components_input_text_fields';
  info: {
    displayName: 'Input Text Field';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Placeholder: Attribute.String;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    isTextarea: Attribute.Boolean & Attribute.DefaultTo<false>;
    isEmail: Attribute.Boolean & Attribute.DefaultTo<false>;
    isWebsite: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsLinkMenu extends Schema.Component {
  collectionName: 'components_components_link_menus';
  info: {
    displayName: 'Link Menu';
  };
  attributes: {
    Link: Attribute.Component<'components.link'>;
    hasSubmenu: Attribute.Boolean & Attribute.DefaultTo<false>;
    Submenu: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<'Lorem ipsum'>;
    Url: Attribute.String & Attribute.DefaultTo<'/'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    Image: Attribute.Media;
  };
}

export interface ComponentsLinksColumn extends Schema.Component {
  collectionName: 'components_components_links_columns';
  info: {
    displayName: 'Links Column';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Column title'>;
    Links: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsMetric extends Schema.Component {
  collectionName: 'components_components_metrics';
  info: {
    displayName: 'Stat';
    description: '';
  };
  attributes: {
    Number: Attribute.String & Attribute.DefaultTo<'10k'>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Repositories in review'>;
  };
}

export interface ComponentsNewsletter extends Schema.Component {
  collectionName: 'components_components_newsletters';
  info: {
    displayName: 'Select Option';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<'Label'>;
    Value: Attribute.String & Attribute.DefaultTo<'Value'>;
  };
}

export interface ComponentsNotification extends Schema.Component {
  collectionName: 'components_components_notifications';
  info: {
    displayName: 'Notification';
    description: '';
  };
  attributes: {
    Text: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.'>;
    Link: Attribute.Component<'components.link'>;
    Show: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsPill extends Schema.Component {
  collectionName: 'components_components_pills';
  info: {
    displayName: 'Pill';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Link: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsPlan extends Schema.Component {
  collectionName: 'components_components_plans';
  info: {
    displayName: 'Plan';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Price: Attribute.String;
    Detail: Attribute.String;
    Button: Attribute.Component<'components.link'>;
    IncludesTitle: Attribute.String;
    Bullets: Attribute.Component<'components.bullets', true>;
    Recommended: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsPrivacyPolicyQuestions extends Schema.Component {
  collectionName: 'components_components_privacy_policy_questions';
  info: {
    displayName: 'Privacy Policy Questions';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.RichText;
    Bullets: Attribute.Component<'components.bullets', true>;
  };
}

export interface ComponentsSecurity extends Schema.Component {
  collectionName: 'components_components_securities';
  info: {
    displayName: 'Security Card';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    DownloadText: Attribute.String;
    DownloadFile: Attribute.Media;
  };
}

export interface ComponentsSocials extends Schema.Component {
  collectionName: 'components_components_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    Socials: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.DefaultTo<'Marguerite Bergnaum'>;
    Avatar: Attribute.Media;
    Job: Attribute.String &
      Attribute.DefaultTo<'Marketing Director @Metadata.io '>;
    Opinion: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
  };
}

export interface ComponentsTrustCard extends Schema.Component {
  collectionName: 'components_components_trust_cards';
  info: {
    displayName: 'Trust Card';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    Title: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur.Reviews only the essential code'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.'>;
  };
}

export interface LayoutContactFormSection extends Schema.Component {
  collectionName: 'components_layout_contact_form_sections';
  info: {
    displayName: 'Contact Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    NumberOfDevelopers: Attribute.Component<'components.input-select-field'>;
    HowCanWeHelp: Attribute.Component<'components.input-text-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutContactUsSection extends Schema.Component {
  collectionName: 'components_layout_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Still have questions?'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutCustomersSection extends Schema.Component {
  collectionName: 'components_layout_customers_sections';
  info: {
    displayName: 'Customers Section';
    description: '';
  };
  attributes: {
    Customers: Attribute.Component<'components.link', true>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Trusted by 1000+ organizations'>;
  };
}

export interface LayoutEventCard extends Schema.Component {
  collectionName: 'components_layout_event_cards';
  info: {
    displayName: 'Event Card';
    icon: 'check';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface LayoutFaqSection extends Schema.Component {
  collectionName: 'components_layout_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Frequently asked questions'>;
    Button: Attribute.Component<'components.link'>;
    Faqs: Attribute.Component<'components.faq-item', true>;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    Features: Attribute.Component<'components.feature', true>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutGdprFormSection extends Schema.Component {
  collectionName: 'components_layout_gdpr_form_sections';
  info: {
    displayName: 'GDPR Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please fill out this form to request access:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    NumberOfDevelopers: Attribute.Component<'components.input-select-field'>;
    UtmSource: Attribute.Component<'components.input-text-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutGetStarted extends Schema.Component {
  collectionName: 'components_layout_get_starteds';
  info: {
    displayName: 'Get Started Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Get started today'>;
    Description_1: Attribute.String & Attribute.DefaultTo<'14-day free trial '>;
    Buttons: Attribute.Component<'components.link', true>;
    TextDetails: Attribute.String &
      Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    Image: Attribute.Media;
    ImageSM: Attribute.Media;
    Description_2: Attribute.String;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero Section';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Image: Attribute.Media;
    Buttons: Attribute.Component<'components.link', true>;
    Tag: Attribute.String & Attribute.DefaultTo<'Page name'>;
    LottieLG: Attribute.JSON;
    Bullets: Attribute.Component<'components.bullets', true>;
    LottieSM: Attribute.JSON;
    Description_1: Attribute.String & Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Attribute.String &
      Attribute.DefaultTo<'No credit card needed.'>;
    Description_3: Attribute.String &
      Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
  };
}

export interface LayoutHowItWorksSection extends Schema.Component {
  collectionName: 'components_layout_how_it_works_sections';
  info: {
    displayName: 'How It Works Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Steps: Attribute.Component<'components.how-it-works', true>;
  };
}

export interface LayoutMetricsSection extends Schema.Component {
  collectionName: 'components_layout_metrics_sections';
  info: {
    displayName: 'Stats Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'The most installed AI App on GitHub & GitLab'>;
    Stats: Attribute.Component<'components.metric', true>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Loved by 1000s of developers'>;
  };
}

export interface LayoutPillsSection extends Schema.Component {
  collectionName: 'components_layout_pills_sections';
  info: {
    displayName: 'Pills Section';
    description: '';
  };
  attributes: {
    Pills: Attribute.Component<'components.pill', true>;
  };
}

export interface LayoutPlansSection extends Schema.Component {
  collectionName: 'components_layout_plans_sections';
  info: {
    displayName: 'Plans Section';
  };
  attributes: {
    Plans: Attribute.Component<'components.plan', true>;
  };
}

export interface LayoutPrivacyPolicySection extends Schema.Component {
  collectionName: 'components_layout_privacy_policy_sections';
  info: {
    displayName: 'Privacy Policy Section';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Our privacy policy'>;
    Description: Attribute.RichText;
    Questions: Attribute.Component<'components.privacy-policy-questions', true>;
  };
}

export interface LayoutSecuritySection extends Schema.Component {
  collectionName: 'components_layout_security_sections';
  info: {
    displayName: 'Security Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Securities: Attribute.Component<'components.security', true>;
  };
}

export interface LayoutSocFormSection extends Schema.Component {
  collectionName: 'components_layout_soc_form_sections';
  info: {
    displayName: 'SOC Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please fill out this form to request access:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    NumberOfDevelopers: Attribute.Component<'components.input-select-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutStartupFormSection extends Schema.Component {
  collectionName: 'components_layout_startup_form_sections';
  info: {
    displayName: 'Startup Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Complete this form, If your organization qualifies for our Startup program, we'll activate your account.">;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyWebsite: Attribute.Component<'components.input-text-field'>;
    GitOrgName: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    Email: Attribute.Component<'components.input-text-field'>;
    TrialCheckbox: Attribute.Component<'components.input-checkbox-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutTestimonials extends Schema.Component {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials Section';
    description: '';
  };
  attributes: {
    Testimonials: Attribute.Component<'components.testimonial', true>;
    Title: Attribute.String & Attribute.DefaultTo<'What they say about us'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutTrustSection extends Schema.Component {
  collectionName: 'components_layout_trust_sections';
  info: {
    displayName: 'Trust Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Your data stays confidential'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'We take security, privacy, and compliance seriously.'>;
    Cards: Attribute.Component<'components.trust-card', true>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    canonical: Attribute.String & Attribute.DefaultTo<'https://coderabbit.ai/'>;
    keywords: Attribute.String &
      Attribute.DefaultTo<'coderabbit, ai, code, git, gitlab, github'>;
    og_url: Attribute.String & Attribute.DefaultTo<'https://coderabbit.ai/'>;
    og_title: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    og_description: Attribute.Text &
      Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    og_sitename: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    og_locale: Attribute.String & Attribute.DefaultTo<'en_US'>;
    og_type: Attribute.String & Attribute.DefaultTo<'website'>;
    og_image: Attribute.Media;
    twitter_card: Attribute.String & Attribute.DefaultTo<'summary_large_image'>;
    twitter_title: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    twitter_description: Attribute.Text &
      Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    twitter_image: Attribute.Media;
    twitter_site: Attribute.String;
    twitter_creator: Attribute.String;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.bullets': ComponentsBullets;
      'components.contact-success': ComponentsContactSuccess;
      'components.faq-item': ComponentsFaqItem;
      'components.feature': ComponentsFeature;
      'components.form-side-section': ComponentsFormSideSection;
      'components.how-it-works': ComponentsHowItWorks;
      'components.input-checkbox-field': ComponentsInputCheckboxField;
      'components.input-select-field': ComponentsInputSelectField;
      'components.input-text-field': ComponentsInputTextField;
      'components.link-menu': ComponentsLinkMenu;
      'components.link': ComponentsLink;
      'components.links-column': ComponentsLinksColumn;
      'components.metric': ComponentsMetric;
      'components.newsletter': ComponentsNewsletter;
      'components.notification': ComponentsNotification;
      'components.pill': ComponentsPill;
      'components.plan': ComponentsPlan;
      'components.privacy-policy-questions': ComponentsPrivacyPolicyQuestions;
      'components.security': ComponentsSecurity;
      'components.socials': ComponentsSocials;
      'components.testimonial': ComponentsTestimonial;
      'components.trust-card': ComponentsTrustCard;
      'layout.contact-form-section': LayoutContactFormSection;
      'layout.contact-us-section': LayoutContactUsSection;
      'layout.customers-section': LayoutCustomersSection;
      'layout.event-card': LayoutEventCard;
      'layout.faq-section': LayoutFaqSection;
      'layout.features-section': LayoutFeaturesSection;
      'layout.gdpr-form-section': LayoutGdprFormSection;
      'layout.get-started': LayoutGetStarted;
      'layout.hero': LayoutHero;
      'layout.how-it-works-section': LayoutHowItWorksSection;
      'layout.metrics-section': LayoutMetricsSection;
      'layout.pills-section': LayoutPillsSection;
      'layout.plans-section': LayoutPlansSection;
      'layout.privacy-policy-section': LayoutPrivacyPolicySection;
      'layout.security-section': LayoutSecuritySection;
      'layout.soc-form-section': LayoutSocFormSection;
      'layout.startup-form-section': LayoutStartupFormSection;
      'layout.testimonials': LayoutTestimonials;
      'layout.trust-section': LayoutTrustSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
