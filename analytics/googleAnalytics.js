```javascript
// Importing the necessary Google Analytics library
const { GoogleAnalytics } = require('google-analytics');

// Initialize Google Analytics with your tracking ID
const ga = new GoogleAnalytics('YOUR_TRACKING_ID');

// Function to track page views
const trackPageView = (url) => {
  ga.pageview({
    dp: url,
    dh: "www.yourwebsite.com",
    dt: "Your Website Title"
  });
};

// Function to track events
const trackEvent = (category, action, label, value) => {
  ga.event({
    ec: category,
    ea: action,
    el: label,
    ev: value
  });
};

// Function to track exceptions
const trackException = (description, isFatal) => {
  ga.exception({
    exd: description,
    exf: isFatal || false
  });
};

// Exporting the tracking functions
module.exports = {
  trackPageView,
  trackEvent,
  trackException
};
```