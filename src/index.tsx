import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './context/contextProvider';
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './languages/langSettings';

registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS3xWdk1iX35cd3dTRw==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdEdmWXdfdnVXQWVcUA==;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhXH9WcXJURGdaV0U=;ODE1MDQ4QDMyMzAyZTM0MmUzMFBKVm16Um9aSSs3dmlmamtLUHAwMnNvcGxHK1R3WXhWMkJteTVyN0VvS2s9;ODE1MDQ5QDMyMzAyZTM0MmUzMEc3UndIL0RBL3RYNS9nN0dLTHdrWGZzZ3Y5b2VIc0hlN1prK0VTYlVXZWs9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhW3peeHVTR2JUUk13;ODE1MDUxQDMyMzAyZTM0MmUzMENPWDZSRmxnQ2NpcDJjT0IyVUQ1SkJDMTlkdFNObnZpd24vbU9tRDZYalU9;ODE1MDUyQDMyMzAyZTM0MmUzMGdXQXAxN3REYThLMkFFM1QvY3dZWWtsZDBCOXlXYXBTZ0lpV3VXQXpsK3M9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhXH9WcXJURGldVkU=;ODE1MDU0QDMyMzAyZTM0MmUzMGZxWWhjVDQvakt0bGgrRG5KTyt5Tk5uQzR5by8weWNhL3ZNeHozL0hHWGs9;ODE1MDU1QDMyMzAyZTM0MmUzMFpUUVpvZno0ZXFBVkpvTmIwZFhpQ3RCWGRYSXVKc0RXNFFHbzE4Vlh5eXM9;ODE1MDU2QDMyMzAyZTM0MmUzMENPWDZSRmxnQ2NpcDJjT0IyVUQ1SkJDMTlkdFNObnZpd24vbU9tRDZYalU9');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);


