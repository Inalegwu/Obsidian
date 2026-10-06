import * as SolarIcons from '@solar-icons/react/dynamic'
import type { ComponentType, SVGProps } from 'react'

/**
 * Converts:
 *   HeartIcon          -> heart
 *   ArrowLeftIcon      -> arrow-left
 *   AltArrowDownIcon  -> alt-arrow-down
 *
 * This is used only at the type level to derive the public `name` union.
 */
type StripIconSuffix<S extends string> =
  S extends `${infer Name}Icon` ? Name : never

type KebabCase<S extends string> =
  S extends `${infer Head}${infer Tail}`
    ? Tail extends Uncapitalize<Tail>
      ? `${Lowercase<Head>}${KebabCase<Tail>}`
      : `${Lowercase<Head>}-${KebabCase<Tail>}`
    : S

type SolarExportName = Extract<keyof typeof SolarIcons, string>

type SolarComponentName = StripIconSuffix<
  Extract<SolarExportName, `${string}Icon`>
>

/**
 * All valid Solar icon names.
 *
 * Examples:
 *   "heart"
 *   "arrow-left"
 *   "alt-arrow-down"
 *   "user-rounded"
 */
export type SolarIconName = KebabCase<SolarComponentName>

/**
 * The six styles supported by Solar Icons v2.
 */
export type SolarIconWeight =
  | 'Bold'
  | 'Linear'
  | 'Outline'
  | 'BoldDuotone'
  | 'LineDuotone'
  | 'Broken'

type SolarIconProps = Omit<
  SVGProps<SVGSVGElement>,
  'color' | 'strokeWidth'
> & {
  /**
   * Solar icon name in kebab-case.
   *
   * @example "heart"
   * @example "arrow-left"
   * @example "user-rounded"
   */
  name: SolarIconName

  /**
   * Runtime icon style.
   *
   * @default "Linear"
   */
  weight?: SolarIconWeight

  color?: string

  size?: string | number

  strokeWidth?: string | number

  secondaryColor?: string

  secondaryOpacity?: number

  isolated?: boolean

  alt?: string
}

/**
 * Convert a kebab-case icon name to the component export name
 * used by @solar-icons/react/dynamic.
 *
 * "heart"         -> "HeartIcon"
 * "arrow-left"    -> "ArrowLeftIcon"
 * "user-rounded"  -> "UserRoundedIcon"
 */
function toComponentName(name: string): string {
  return (
    name
      .split('-')
      .map(
        part => part.charAt(0).toUpperCase() + part.slice(1)
      )
      .join('') + 'Icon'
  )
}

/**
 * Runtime registry.
 *
 * TypeScript verifies that the keys come from the Solar Icons package.
 */
const icons = SolarIcons as Record<
  string,
  ComponentType<any>
>

function SolarIcon({
  name,
  weight = 'Linear',
  ...props
}: SolarIconProps) {
  const componentName = toComponentName(name)
  const Icon = icons[componentName]

  if (!Icon) {
    throw new Error(
      `Unknown Solar icon "${name}". ` +
        `Make sure the name matches a Solar Icons v2 icon.`
    )
  }

  return <Icon weight={weight} {...props} />
}

export default SolarIcon
