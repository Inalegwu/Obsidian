import { Tooltip as RTooltip } from 'radix-ui';

export default function Tooltip(
  props: RTooltip.TooltipProps & { content: string; asChild?: boolean },
) {
  return (
    <RTooltip.Provider>
      <RTooltip.Root>
        <RTooltip.Trigger asChild={props.asChild}>
          {props.children}
        </RTooltip.Trigger>
        <RTooltip.Portal>
          <RTooltip.Content
            side='top'
            className='select-none rounded-md border border-solid border-neutral-200 bg-white px-3 py-2 text-xs font-medium leading-none text-black shadow-md will-change-[transform,opacity] data-[state=delayed-open]:date-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade'>
            {props.content}
            <RTooltip.Arrow className='fill-white' />
          </RTooltip.Content>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  );
}
