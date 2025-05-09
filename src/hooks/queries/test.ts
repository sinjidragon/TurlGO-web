import { useMutation } from '@tanstack/react-query'
import api from '@/services/api'
import { TestRequest, TestResult } from '@/types/test'

export const useTestMutation = () => {
  return useMutation<TestResult[], Error, TestRequest>({
    mutationFn: async (data) => {
      try {
        console.log('Sending test data:', data)
        const { data: responseData } = await api.post('/test', data)
        console.log('Received response:', responseData)

        const parsedData = typeof responseData === 'string' 
          ? JSON.parse(responseData) 
          : responseData

        const results: TestResult[] = parsedData.map((item: any) => ({
          견종: item.견종,
          성격: item.성격,
          퍼센테이지: item.퍼센테이지,
          특성: item.특성
        }))

        return results
      } catch (error) {
        console.error('API call failed:', error)
        throw error
      }
    },
  })
}
