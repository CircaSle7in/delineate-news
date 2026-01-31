import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface MetaProps {
  title: string;
  desc: string;
  img?: string;
}

export const useMeta = ({ title, desc, img }: MetaProps) => {
  const location = useLocation();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`https://delineate.news${location.pathname}`} />
      {img && <meta property="og:image" content={img} />}
    </Helmet>
  );
};
