/**
 * GOLD HIVE PERSISTENCE & INJECTION SCRIPT
 * For use on Partner Vendor Sites
 */
(function() {
  // 1. Function to find the Gold Hive cookie set by goldhive.org
  function getGoldHiveCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // 2. Check for the 'gh_partner_ref' cookie
  const partnerId = getGoldHiveCookie('gh_partner_ref');

  // 3. If the user is a Gold Hive referral, inject 'goldhive' into the form
  if (partnerId === 'goldhive') {
    // We search for the hidden field by ID or by Name attribute
    const targetField = document.getElementById('referral_source') || 
                        document.querySelector('input[name="referral_source"]');
    
    if (targetField) {
      targetField.value = 'goldhive';
      console.log("Gold Hive Referral: Attribution captured successfully.");
    } else {
      console.log("Gold Hive Referral: Tracking field 'referral_source' not found on this page.");
    }
  }
})();