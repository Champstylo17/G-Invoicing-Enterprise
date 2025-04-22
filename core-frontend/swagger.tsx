
import dynamic from 'next/dynamic';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerPage() {
  return <SwaggerUI url="/docs/openapi.json" />;
}
