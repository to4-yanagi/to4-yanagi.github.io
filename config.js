import {} from 'dotenv/config'

const getValidConfig = (configEnv, keys) => {
  let { config, missingKeys } = keys.reduce(
    (acc, key) => {
      if (!configEnv[key]) {
        acc.missingKeys.push(key)
      } else {
        acc.config[key] = configEnv[key]
      }
      return acc
    },
    { config: {}, missingKeys: [] }
  )

  if (missingKeys.length) {
    throw new Error(`Contentful key is missing : ${missingKeys.join(', ')}`)
  }
  return config
}

export default keys => {
  const configEnv = {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  }
  return getValidConfig(configEnv, keys)
}