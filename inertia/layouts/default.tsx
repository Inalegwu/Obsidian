import type { Data } from '@generated/data';
import { usePage } from '@inertiajs/react';
import {
  CheckCircle,
  CloseCircle,
  CloseSquare,
  InfoCircle,
  Refresh,
} from '@solar-icons/react';
import { type ReactElement, useEffect } from 'react';
import { Toaster, toast } from 'sonner';

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
            <CheckCircle className='icon' size={22} weight='BoldDuotone' />
          ),
          error: (
            <CloseCircle className='icon' size={22} weight='BoldDuotone' />
          ),
          info: <InfoCircle className='icon' size={22} weight='BoldDuotone' />,
          close: (
            <CloseSquare className='icon' size={22} weight='BoldDuotone' />
          ),
          loading: (
            <Refresh
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
