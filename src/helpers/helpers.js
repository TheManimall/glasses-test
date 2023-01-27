import { colorFilter, shapeFilter } from '../components/Filter/data'

export const getAndTransformDataFromAPI = (data) => {
  return data.reduce((acc, item) => {
    return [
      ...acc, 
      { 
        id: item.id,
        name: item.name,
        configurationName: item.configuration_name,
        imageUrl: item.glass_variants[0].media[0].url
      }]
  }, [])
}

const colorFilterData = colorFilter.map(({ name }) => name)
const shapeFilterData = shapeFilter.map(({ name }) => name)

const filterColorParams = 'filters[glass_variant_frame_variant_colour_tag_configuration_names][]='
const filterShapeParams = 'filters[glass_variant_frame_variant_frame_tag_configuration_names][]='

export const buildFilterLinkForAPI = (pathname, page, filter = []) => {
  const filterLink = filter.reduce((acc, item) => {
    if (colorFilterData.includes(item)) {
      return `${acc}&${filterColorParams}${item}`
    } else if (shapeFilterData.includes(item)) {
      return `${acc}&${filterShapeParams}${item}`
    } else {
      return acc
    }
  }, `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections${pathname}/glasses?page[limit]=12&page[number]=${page}`)

  return filterLink
}

export const getTitleFromLocation = pathname => {
  return pathname.split('-').join(' ').substring(1)
}