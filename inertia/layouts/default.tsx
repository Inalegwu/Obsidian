import type { Data } from '@generated/data';
import { usePage } from '@inertiajs/react';
import { type ReactElement, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { SolarIcon } from '../components/atoms';

export default function Layout({
  children,
}: {
  children: ReactElement<Data.SharedProps>;
}) {
  useEffect(() => {
    toast.dismiss();
  }, [usePage().url]);

  if (children.props.flash.error) {
    toast.error(children.props.flash.error);
  }

  return (
    <>
      <main>{children}</main>
      <Toaster
        toastOptions={{
          classNames: {
            title: 'toastTitle',
            toast: 'toast',
            description: 'toastDescription',
            actionButton: 'toastAction',
            closeButton: 'toastClose',
            cancelButton: 'toastCancel',
          },
        }}
        icons={{
          success: (
            <SolarIcon name="check" className='icon' size={22} weight='BoldDuotone' />
          ),
          error: (
            <SolarIcon name="close" className='icon' size={22} weight='BoldDuotone' />
          ),
          info: <SolarIcon name="info" className='icon' size={22} weight='BoldDuotone' />,
          close: (
            <SolarIcon name="close" className='icon' size={22} weight='BoldDuotone' />
          ),
          loading: (
            <SolarIcon name="refresh"
              className='icon animate-spin'
              size={22}
              weight='BoldDuotone'
            />
          ),
        }}
        position='top-right'
        // richColors
      />
    </>
  );
}
