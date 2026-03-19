/**
 * Opens a compose email window.
 * On mobile: uses mailto: (works with native mail apps)
 * On desktop: opens Gmail compose in new tab
 */
export function openMailCompose(to: string, subject: string, body: string) {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
  }
}