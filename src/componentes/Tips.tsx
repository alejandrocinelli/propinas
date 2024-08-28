const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type tipsProps = {
  setTips: React.Dispatch<React.SetStateAction<number>>
  tips: number
}

const Tips = ({setTips , tips} : tipsProps ) => {
  return (
    <div className="">
      <h3 className=" font-black text-2xl">Propinas </h3>

      <form action="">
          {tipOptions.map(tip => (
            <div className="flex gap-2" key={tip.id}>
              <label htmlFor={tip.id}> {tip.label} </label>
              <input type="radio"
              name="tip"
              value={tip.value}
              onChange={e => setTips(+e.target.value)}
              //onChange={e => setTips(+e.target.value)} con el + lo convierte a number. 
              checked = {tip.value === tips}
               />
              </div>
          ) )}
      </form>
    </div>
  )
}

export default Tips