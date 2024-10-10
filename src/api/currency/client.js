import HttpClient from '@/core/http-client.js'
import { CURRENCY_API, CURRENCY_ENDPOINTS } from '@/api/currency/endpoints.js'
import config from '@/config.js'

const CurrencyApi = new HttpClient(CURRENCY_API, { ['api_key']: config.CURRENCYBEACON_API_KEY })

export default {
  getCurrencies: () => CurrencyApi.get(CURRENCY_ENDPOINTS.CURRENCIES),
  convertCurrency: (params) => CurrencyApi.get(CURRENCY_ENDPOINTS.CONVERT, params)
}
