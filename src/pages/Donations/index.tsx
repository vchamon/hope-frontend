import QrCode from '../../assets/images/qr-code-pix.svg'
import Pix from '../../assets/images/pix.svg'
import BancoBrasil from '../../assets/images/banco-do-brasil.svg'
import SAAE from '../../assets/images/saae.png'

export const Donations = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-8 pt-8">
          <div className="text-center mb-16">
            <h1 className="text-primary500 text-4xl font-bold after:block after:w-12 after:h-1 after:mx-auto after:bg-primary500 after:m-2">
              Doações
            </h1>
          </div>
          <p>
            Você pode fazer doações de gêneros e materiais diversos, em espécie e através da conta de água*.
            Para isto, basta nos contatar ou escolher uma das formas abaixo:
          </p>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Pix
          </h2>
          <div className="flex max-md:flex-col items-center justify-evenly gap-8">
            <div className="py-8">
              <img className="w-60" src={Pix} />
            </div>
            <div className="flex max-md:flex-col items-center gap-8">
              <div className='flex flex-col gap-2'>
                <p>
                  <strong>Nome: </strong>Lar Espirita Paulo de Tarso
                </p>
                <p>
                  <strong>CNPJ: </strong>21.140.645/0001-08
                </p>
                <p>
                  <strong>Instituição: </strong>Banco do Brasil S.A.
                </p>
                <p>
                  <strong>Chave de CNPJ: </strong>21.140.645/0001-08
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-48 mb-2" src={QrCode} />
                <p className="text-sm">
                  Ou escaneie o QR Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale100">
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Transferência bancária
          </h2>
          <div className="flex max-md:flex-col items-center justify-evenly gap-8">
            <div className="flex flex-col flex-1 items-center">
              <img className="w-48" src={BancoBrasil} />
            </div>
            <div className="flex-1">
              <p>
                <strong>Nome: </strong>Lar Espirita Paulo de Tarso
              </p>
              <p>
                <strong>CNPJ: </strong>21.140.645/0001-08
              </p>
              <p>
                <strong>Instituição: </strong>Banco do Brasil S.A.
              </p>
              <p>
                <strong>Agência: </strong>0395-6
              </p>
              <p>
                <strong>Conta: </strong>5534-4
              </p>
              <p>
                <strong>Tipo de conta: </strong>Corrente
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Conta de água
          </h2>
          <div className="flex max-md:flex-col items-center gap-8">
            <div className="flex flex-col flex-1 items-center justify-center">
              <img className="max-w-60" src={SAAE} />
            </div>
            <div className='flex flex-col flex-1'>
              <p>Destina-se a doações recorrentes. Esta opção está disponível apenas para a cidade de Sete Lagoas/MG.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}