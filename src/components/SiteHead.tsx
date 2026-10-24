import { Head } from 'vite-react-ssg';

const SITE_URL = 'https://constructclients.com';
const DEFAULT_TITLE = 'ConstructClients - Freedom, Joy, High value Projects';
const DEFAULT_DESCRIPTION =
  'ConstructClients helps luxury renovation businesses fill their calendars with high-value clients through AI appointment setting, high-converting websites, and proven ad systems.';
const OG_IMAGE = `${SITE_URL}/constructclients-logo.png`;

const SiteHead = () => {
  return (
    <Head>
      <title>{DEFAULT_TITLE}</title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <link rel="canonical" href={SITE_URL} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={DEFAULT_TITLE} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="ConstructClients" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={DEFAULT_TITLE} />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  );
};

export default SiteHead;
