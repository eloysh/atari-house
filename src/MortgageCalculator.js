import React, { useState } from 'react';
import './MortgageCalculator.css';

<<<<<<< HEAD
// Moved checkEligibilityForRuralMortgage function outside the MortgageCalculator component
const checkEligibilityForRuralMortgage = () => {
  // Реализовать проверку условий для Сельской ипотеки
  // Вернуть true, если подходит, false в противном случае
  // Ваши условия могут варьироваться в зависимости от требований программы
  return true; // Для демонстрационных целей, предполагаем, что все подходят
};
const checkEligibilityForFamilyMortgage = () => {
  // Реализуйте проверку условий для Семейной ипотеки
  // Верните true, если подходит, false в противном случае
  // Ваши условия могут варьироваться в зависимости от требований программы
  return true; // Для демонстрационных целей, предположим, что все подходят
};

function MortgageCalculator() {
=======
function MortgageCalculator() {

 
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [mortgageType, setMortgageType] = useState('ДВ');
<<<<<<< HEAD
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTermYears, setLoanTermYears] = useState('');
  const [error, setError] = useState('');
  const [eligible, setEligible] = useState(false);
  const [initialPayment, setInitialPayment] = useState(''); // Переместите сюда
  const handleMortgageTypeChange = (event) => {
    setMortgageType(event.target.value);
    setEligible(false); // Reset eligibility status when mortgage type changes
  };

  const handleInputChange = (setter, value) => {
    setError('');
    setter(value);
  };

  const calculateMortgage = () => {
    if (!loanAmount || !loanTermYears) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    let interestRate;
    switch (mortgageType) {
      case 'ДВ':
        interestRate = 2 / 100 / 12; // 2% годовых для Дальневосточной ипотеки
        break;
      case 'Семейная':
        interestRate = 15 / 100 / 12; // 15% годовых для Семейной ипотеки
        break;
      case 'Сельская':
        interestRate = 3 / 100 / 12; // 3% годовых для Сельской ипотеки
        break;
      default:
        interestRate = 0;
    }

    const amount = parseFloat(loanAmount);
    const termMonths = parseFloat(loanTermYears) * 12;

    const monthlyPayment = (amount * interestRate) / (1 - Math.pow(1 + interestRate, -termMonths));
    const totalPayment = monthlyPayment * termMonths;
    const totalInterest = totalPayment - amount;
=======

  const handleMortgageTypeChange = (event) => {
    setMortgageType(event.target.value);
  };
  const [loanAmount, setLoanAmount] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(2.6);
  const [loanTermYears, setLoanTermYears] = useState(30);
  
  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const calculateMortgage = () => {
    let monthlyInterestRate;
    let numPayments;

    if (mortgageType === 'ДВ') {
      // Расчет для дальневосточной ипотеки
      const dvInterestRate = 2.6 / 100; // 2.6% годовых
      monthlyInterestRate = dvInterestRate / 12;
      numPayments = loanTermYears * 12;
    } else if (mortgageType === 'Семейная') {
      // Расчет для семейной ипотеки
      // Ваш код для расчета семейной ипотеки
    } else if (mortgageType === 'Господдержка') {
      // Расчет для ипотеки с господдержкой
      // Ваш код для расчета ипотеки с господдержкой
    }

    const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments)) / (Math.pow(1 + monthlyInterestRate, numPayments) - 1);
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - loanAmount;
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalPayment(totalPayment.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
<<<<<<< HEAD

    if (mortgageType === 'ДВ') {
      // Check additional eligibility conditions for the Far Eastern mortgage
      const isEligible = checkEligibilityForFarEasternMortgage();
      setEligible(isEligible);
    }

    if (mortgageType === 'Сельская') {
      // Check additional eligibility conditions for the Rural mortgage
      const isEligible = checkEligibilityForRuralMortgage();
      setEligible(isEligible);
    }
    if (mortgageType === 'Семейная') {
      const isEligible = checkEligibilityForFamilyMortgage();
      setEligible(isEligible);
    }
  };

  const checkEligibilityForFarEasternMortgage = () => {
    // Check additional eligibility conditions for the Far Eastern mortgage
    // Return true if eligible, false otherwise
    // Example conditions:
    // - Young families with both spouses under 35
    // - Citizens under 36 with children under 18
    // - Participants of the "Far Eastern or Arctic Hectare" program
    // - Citizens who moved to the Far Eastern regions within the framework of regional programs to increase the mobility of labor resources
    // - Employees of state or municipal medical organizations in the Far Eastern and Arctic regions with at least 5 years of experience
    // - Teachers in state or municipal educational organizations in the Far Eastern and Arctic regions with at least 5 years of experience
    // - Forced migrants from the territories of Ukraine, LPR, and DPR, who now live in one of the regions of the Far East and the Arctic
    // - Employees of OPK enterprises in the Far Eastern and Arctic regions
    // You can implement this logic based on your specific requirements and conditions
    return true; // For demonstration purposes, assuming everyone is eligible
  };

  return (
    <div className="mortgage-calculator">
    <h2>Калькулятор ипотеки</h2>
    <div className="input-group">
      <label htmlFor="mortgageType">Выберите тип ипотеки:</label>
      <select id="mortgageType" value={mortgageType} onChange={handleMortgageTypeChange}>
        <option value="ДВ">Дальневосточная ипотека</option>
        <option value="Семейная">Семейная ипотека</option>
        <option value="Сельская">Сельская ипотека</option>
      </select>
    </div>
    <div className="calculator-container">
      <div className="form-group">
        <label htmlFor="loan-amount">Сумма кредита:</label>
        <input
          type="number"
          id="loan-amount"
          value={loanAmount}
          onChange={(e) => handleInputChange(setLoanAmount, e.target.value)}
          placeholder="Введите сумму кредита"
        />
      </div>
      <div className="form-group">
        <label htmlFor="initial-payment">Первоначальный взнос:</label>
        <input
          type="number"
          id="initial-payment"
          value={initialPayment}
          onChange={(e) => handleInputChange(setInitialPayment, e.target.value)}
          placeholder="Введите первоначальный взнос"
        />
      </div>
      <div className="form-group">
        <label htmlFor="loan-term-years">Срок кредита (в годах):</label>
        <input
          type="number"
          id="loan-term-years"
          value={loanTermYears}
          onChange={(e) => handleInputChange(setLoanTermYears, e.target.value)}
          placeholder="Введите срок кредита"
        />
      </div>
      <button onClick={calculateMortgage}>Рассчитать</button>
      {error && <div className="error">{error}</div>}
      <div className="result">
      {monthlyPayment && <p><strong>Ежемесячный платеж:</strong> {monthlyPayment} рублей</p>}
        {totalPayment && <p><strong>Общая сумма выплаты:</strong> {totalPayment} рублей</p>}
        {totalInterest && <p><strong>Общая сумма процентов:</strong> {totalInterest} рублей</p>}
      </div>
    </div>
  
  
        {mortgageType === 'ДВ' && (
          <div className="eligibility-conditions">
            <h3>Условия получения Дальневосточной ипотеки:</h3>
            <ul style={{ listStyleType: "none" }}>
    <li><span role="img" aria-label="checkmark">✔️</span> Молодые семьи, в которых оба супруга в возрасте до 35 лет (включительно)</li>
    <li><span role="img" aria-label="checkmark">✔️</span> Граждане, которым не исполнилось 36 лет с детьми в возрасте до 18 лет (включительно)</li>
    <li><span role="img" aria-label="checkmark">✔️</span> Участники программы «Дальневосточный или арктический гектар»</li>
    <li><span role="img" aria-label="checkmark">✔️</span> Граждане, которые переехали в регионы ДФО в рамках региональных программ повышения мобильности трудовых ресурсов</li>
    <li><span role="img" aria-label="checkmark">✔️</span> Работники государственной или муниципальной медицинской организации на территории ДФО и арктических регионов со стажем от 5 лет в такой организации</li>
    <li><span role="img" aria-label="checkmark">✔️</span> Педагоги в государственной или муниципальной образовательной организации на территории ДФО и арктических регионов со стажем от 5 лет в такой организации</li>
    <li><span role="img" aria-label="checkmark">✔️</span> Вынужденные переселенцы с территорий Украины, ЛНР и ДНР, которые сейчас проживают в одном из регионов Дальнего Востока и Арктики</li>
    <li><span role="img" aria-label="checkmark">✔️</span> Работники предприятий ОПК на территории Дальнего Востока и Арктики</li>
</ul>


            {eligible ? (
              <p>Вы подходите для получения Дальневосточной ипотеки</p>
            ) : (
              <p>Вы не подходите для получения Дальневосточной ипотеки</p>
            )}
          </div>
        )}
         {mortgageType === 'Сельская' && (
          <div className="eligibility-conditions">
            <h3>Условия получения Сельской ипотеки:</h3>
            <p>
              Кредит по программе по ставке до 3% может взять любой гражданин Российской Федерации, живущий в сельской местности или планирующий туда переехать.
            </p>
            <p>
              Если с 23 декабря 2023 года вы уже пользовались одной из федеральных ипотечных программ, таких как Льготная ипотека, Семейная ипотека, ИТ-ипотека, Дальневосточная и арктическая ипотека, то Сельскую ипотеку оформить не получится.
            </p>
            {/* Отображение других условий и требований для Сельской ипотеки */}
            {eligible ? (
              <p>Вы подходите для получения Сельской ипотеки</p>
            ) : (
              <p>Вы не подходите для получения Сельской ипотеки</p>
            )}
          </div>
        )}
        {mortgageType === 'Семейная' && (
          <div className="eligibility-conditions">
            <h3>Условия получения Семейной ипотеки:</h3>
            <ul>
              <li><span role="img" aria-label="checkmark">✔️</span> Семьи, в которых с 1 января 2018 года по 31 декабря 2023 года родился первый ребёнок или последующие дети</li>
              <li><span role="img" aria-label="checkmark">✔️</span> Семьи, в которых есть двое и более несовершеннолетних детей</li>
              <li><span role="img" aria-label="checkmark">✔️</span> Семьи, в которых воспитывается ребёнок с инвалидностью, родившийся до 31 декабря 2023 года</li>
              <li><span role="img" aria-label="checkmark">✔️</span> Родители усыновлённых (удочерённых) детей могут принять участие в программе на тех же условиях, что и кровные родители</li>
            </ul>
            {eligible ? (
              <p>Вы подходите для получения Семейной ипотеки</p>
            ) : (
              <p>Вы не подходите для получения Семейной ипотеки</p>
            )}
          </div>
        )}
      </div>

    
=======
  };

  return (
    <div>
      <h2>Калькулятор ипотеки</h2>
      <div>
        <label htmlFor="mortgageType">Выберите тип ипотеки:</label>
        <select id="mortgageType" value={mortgageType} onChange={handleMortgageTypeChange}>
          <option value="">Выберите тип ипотеки</option>
          <option value="ДВ">Дальневосточная ипотека</option>
          <option value="Семейная">Семейная ипотека</option>
          <option value="Господдержка">Господдержка</option>
        </select>
      </div>
      {mortgageType && (
        <div>
          <h3>Расчет ипотеки: {mortgageType}</h3>
          <div className="calculator-container">
            <div className="form-group">
              <label htmlFor="loan-amount">Сумма кредита:</label>
              <input type="number" id="loan-amount" value={loanAmount} onChange={(e) => handleInputChange(e, setLoanAmount)} placeholder="Введите сумму кредита" />
            </div>
            <div className="form-group">
              <label htmlFor="annual-interest-rate">Годовая процентная ставка:</label>
              <input type="number" id="annual-interest-rate" value={annualInterestRate} onChange={(e) => handleInputChange(e, setAnnualInterestRate)} placeholder="Введите годовую процентную ставку" />
            </div>
            <div className="form-group">
              <label htmlFor="loan-term-years">Срок кредита (в годах):</label>
              <input type="number" id="loan-term-years" value={loanTermYears} onChange={(e) => handleInputChange(e, setLoanTermYears)} placeholder="Введите срок кредита" />
            </div>
            <button onClick={calculateMortgage}>Рассчитать</button>
            <div className="result">
              <strong>Ежемесячный платеж:</strong> {monthlyPayment} рублей<br />
              <strong>Общая сумма выплаты:</strong> {totalPayment} рублей<br />
              <strong>Общая сумма процентов:</strong> {totalInterest} рублей
            </div>
          </div>
          <div className="instructions">
            <h4>Инструкции по использованию калькулятора:</h4>
            <p><strong>Дальневосточная ипотека:</strong> Годовая процентная ставка - 2.6%, срок кредита - до 30 лет.</p>
            <p><strong>Семейная ипотека:</strong> Введите информацию о семье и ее доходах для расчета.</p>
            <p><strong>Ипотека с господдержкой:</strong> Проверьте условия государственной программы для расчета.</p>
          </div>
        </div>
      )}
    </div>
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
  );
}

export default MortgageCalculator;
<<<<<<< HEAD



=======
>>>>>>> ab1e8c522159e5b39be430e741cbc1bdf323c7af
