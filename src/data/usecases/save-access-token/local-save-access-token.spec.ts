import { LocalSaveAcessToken } from './local-save-access-token'
import { SetStorageSpy } from '@/data/test/mock-storage'
import faker from 'faker'

type SutTypes = {
  setStorageSpy: SetStorageSpy
  sut: LocalSaveAcessToken
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SetStorageSpy()
  const sut = new LocalSaveAcessToken(setStorageSpy)

  return {
    setStorageSpy,
    sut
  }
}

describe('setSaveAcessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const { sut, setStorageSpy } = makeSut()
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
