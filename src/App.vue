<script setup>
import { useQuery } from 'vue-query'
import CurrencyApiClient from '@/api/currency/client.js'
import { ref } from 'vue'
import Select from '@/components/Select.vue'
import Button from '@/components/Button.vue'
import ErrorAndLoadingBoundary from '@/components/ErrorAndLoadingBoundary.vue'

const fromCurrency = ref()
const toCurrency = ref()
const amount = ref()

const {
  data: currenciesData,
  isError: isCurrenciesError,
  isLoading: isCurrenciesLoading
} = useQuery('currencies', () => CurrencyApiClient.getCurrencies(), {
  // Those parser should be somewhere else, probably api/currency/data-parser.js or sth similar
  select: ({ data }) => data.response.sort((a, b) => a.name.localeCompare(b.name)), retry: false
})

const { data: convertResult, isError: isConvertError, isLoading: isConvertLoading, refetch } = useQuery(
  'convert',
  () => CurrencyApiClient.convertCurrency({ from: fromCurrency.value, to: toCurrency.value, amount: amount.value }),
  // Those parser should be somewhere else, probably api/currency/data-parser.js or sth similar
  { select: ({ data }) => data.response, enabled: false, retry: false }
)
</script>

<template>
  <ErrorAndLoadingBoundary :loading="isCurrenciesLoading" :error="isCurrenciesError">
    <div class="main">
      <Select label="From" :items="currenciesData" item-value="short_code" item-title="name" v-model="fromCurrency" />
      <Select label="To" :items="currenciesData" item-value="short_code" item-title="name" v-model="toCurrency" />
      <v-text-field type="number" v-model="amount" label="Amount" />
      <Button :loading="isConvertLoading" :disabled="!(fromCurrency && toCurrency && amount)"
              @click="refetch" text="Convert" />
      <span v-if="isConvertError">Conversion failed, please try again</span>
      <v-card v-if="convertResult && !isConvertError && !isConvertLoading" title="After conversion:" :text="`${convertResult.value} ${toCurrency}`" />
    </div>

  </ErrorAndLoadingBoundary>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}
</style>
