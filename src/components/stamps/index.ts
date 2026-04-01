import type { StampArtComponent } from '../../data/types'
import PennyBlack from './PennyBlack'
import InvertedJenny from './InvertedJenny'
import BritishGuiana from './BritishGuiana'
import TreskillingYellow from './TreskillingYellow'
import BaselDove from './BaselDove'
import CapeTriangle from './CapeTriangle'
import MauritiusPostOffice from './MauritiusPostOffice'
import HawaiianMissionaries from './HawaiianMissionaries'
import RedMercury from './RedMercury'
import WholeCountryRed from './WholeCountryRed'

export const stampArtRegistry: Record<string, StampArtComponent> = {
  'penny-black': PennyBlack,
  'inverted-jenny': InvertedJenny,
  'british-guiana': BritishGuiana,
  'treskilling-yellow': TreskillingYellow,
  'basel-dove': BaselDove,
  'cape-triangle': CapeTriangle,
  'mauritius-post-office': MauritiusPostOffice,
  'hawaiian-missionaries': HawaiianMissionaries,
  'red-mercury': RedMercury,
  'whole-country-red': WholeCountryRed,
}
