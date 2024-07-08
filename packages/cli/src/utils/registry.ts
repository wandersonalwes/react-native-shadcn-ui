const baseUrl =
  'https://raw.githubusercontent.com/wandersonalwes/react-native-shadcn-ui/main'

export async function fetchComponents(components: string[]) {
  try {
    const fetchedComponents = await Promise.all(
      components.map(async (component) => {
        const response = await fetch(`${baseUrl}/src/components/${component}.tsx`)
        const content = await response.text()
        return {
          name: `${component}.tsx`,
          content,
        }
      })
    )

    return fetchedComponents
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to fetch components from registry.`)
  }
}
