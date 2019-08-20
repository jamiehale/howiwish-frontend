import queryString from 'querystring';
import { withRouter } from 'react-router';

const withQueryParams = Component => {
  const ComponentWithQueryParams = ({ location, ...props }) => {
    const queryParams = queryString.parse(location.search);

    return (
      <Component
        location={location}
        queryParams={queryParams}
        {...props}
      />
    );
  };

  return withRouter(ComponentWithQueryParams);
};

export default withQueryParams;
