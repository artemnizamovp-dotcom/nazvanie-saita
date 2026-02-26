import React from 'react'

const EcoOknaLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <header className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
                ЭКООКНА — честный монтаж
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-900 mb-6">
                Окна без провисаний: армирование 1.5&nbsp;мм и фиксированная цена в договоре.
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl">
                Контролируем монтаж по&nbsp;12&nbsp;параметрам. Вы подписываете акт приёмки только после проверки
                швов тепловизором и проверки чистоты в комнате. Никаких скрытых наценок — все работы и материалы
                прописаны в договоре.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition">
                  Рассчитать стоимость с погрешностью до&nbsp;5%
                </button>
                <p className="text-xs sm:text-sm text-gray-500">
                  Бесплатный выезд замерщика с тепловизором и образцами профиля
                </p>
              </div>
            </div>

            <div className="flex-1 w-full lg:w-auto">
              <div className="relative rounded-3xl border border-emerald-100 bg-emerald-50/40 p-5 sm:p-6 lg:p-7">
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 mb-1">
                        Прозрачная смета
                      </p>
                      <p className="text-gray-800">
                        В договоре фиксируем <span className="font-semibold">окончательную цену</span> — без доплат
                        «на месте».
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-emerald-100 pt-4 flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">
                      Контроль монтажа
                    </p>
                    <ul className="space-y-1 text-gray-800 text-sm">
                      <li>• Проверяем геометрию рамы и отсутствие провисаний</li>
                      <li>• Швы — только по ГОСТ c паро- и гидроизоляцией</li>
                      <li>• Тепловизор — исключаем мостики холода по периметру</li>
                    </ul>
                  </div>

                  <div className="border-t border-emerald-100 pt-4 flex items-center justify-between text-xs text-gray-600">
                    <div>
                      <p className="font-medium text-gray-800">
                        Армирование 1.5&nbsp;мм
                      </p>
                      <p>без экономии на металле и фурнитуре</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-emerald-200 px-3 py-1 text-[11px] font-medium text-emerald-700 bg-white/70">
                      Гарантия монтажа 5 лет
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-3">
                Услуги монтажа без скрытых наценок
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Каждая услуга — с прозрачной сметой: отдельно прописываем профиль, стеклопакет, фурнитуру и работы по
                демонтажу и монтажу.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 mb-3">
                01 — Монтаж / Демонтаж
              </p>
              <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-3">
                Монтаж и демонтаж пластиковых окон
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                Аккуратно демонтируем старые рамы без лишней пыли и мусора, выравниваем проём, устанавливаем окно строго
                по уровню с контролем диагоналей и правильным распределением нагрузок.
              </p>
              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                <li>• Демонтаж со щадящей обработкой откосов</li>
                <li>• Армирование 1.5&nbsp;мм — защита от провисаний</li>
                <li>• Крепление только сертифицированным крепежом</li>
                <li>• Швы по ГОСТ с правильной пароизоляцией</li>
              </ul>
              <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                <span>Фиксированная цена в договоре</span>
                <span className="text-emerald-600 font-medium">Без доплат «за трудности»</span>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 mb-3">
                02 — Балконы
              </p>
              <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-3">
                Остекление и утепление балконов
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                Делаем тёплое и холодное остекление, утепляем по слоям с контролем паропроницаемости, чтобы не
                образовывался конденсат и плесень.
              </p>
              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                <li>• Проект с учётом нагрузки на плиту</li>
                <li>• Теплый контур без «дырок» в утеплении</li>
                <li>• Проверка швов и углов тепловизором</li>
                <li>• Чистый монтаж — вынос мусора включён</li>
              </ul>
              <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                <span>Подробная смета по этапам</span>
                <span className="text-emerald-600 font-medium">Любые допы — только по соглашению</span>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 mb-3">
                03 — Обслуживание
              </p>
              <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-3">
                Ремонт и обслуживание пластиковых окон
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                Регулируем фурнитуру, устраняем продувания, меняем уплотнители и стеклопакеты, возвращаем окнам тихую и
                тёплую работу.
              </p>
              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                <li>• Точная регулировка прижима створок</li>
                <li>• Замена фурнитуры на оригинальную</li>
                <li>• Диагностика тепловизором при сложных случаях</li>
                <li>• Гарантия на работы и детали</li>
              </ul>
              <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                <span>Честные цены по прайсу</span>
                <span className="text-emerald-600 font-medium">Вы знаете стоимость до выезда</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-3">
                Команда, которая отвечает именем
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                У каждого специалиста — минимум 5 лет опыта монтажа. Мы не отправляем на объекты случайные бригады «по
                объявлению».
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 mb-2">
                  Ведущий инженер-монтажник
                </p>
                <h3 className="font-serif text-lg text-gray-900">
                  Алексей Климов
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                9 лет занимается монтажом окон и балконов в квартирах и частных домах. Лично проверяет каждый объект по
                чек-листу из 12 пунктов, включая геометрию рамы и отсутствие мостиков холода.
              </p>
              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                <li>• Специализация: сложные проёмы и панорамное остекление</li>
                <li>• Сертификаты производителей фурнитуры (Roto, Siegenia)</li>
                <li>• Обучает новых мастеров стандартам ЭКООКНА</li>
              </ul>
              <p className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                «Если окно провисло через год — это наш недочёт, а не &quot;особенности дома&quot;. Такого мы не
                допускаем».
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 mb-2">
                  Инженер по теплотехнике
                </p>
                <h3 className="font-serif text-lg text-gray-900">
                  Мария Соколова
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                Отвечает за подбор профиля, стеклопакетов и схемы утепления балконов. Настраивает проверки тепловизором
                и исключает конденсат и промерзания.
              </p>
              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                <li>• Дипломированный инженер-теплотехник</li>
                <li>• Автор внутренних стандартов по утеплению балконов</li>
                <li>• Согласовывает решения для сложных узлов с застройщиком</li>
              </ul>
              <p className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                «Теплый балкон — это не только пеноплекс. Важно, как он уложен, чем закрыт и как работает
                пароизоляция».
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 mb-2">
                  Сервисный инженер
                </p>
                <h3 className="font-serif text-lg text-gray-900">
                  Дмитрий Орлов
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                Специализируется на регулировке фурнитуры и устранении продуваний. Выезжает на гарантийные случаи и
                сложные ремонты, когда «окно уже меняли, но всё равно дует».
              </p>
              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                <li>• Более 2000 отрегулированных окон</li>
                <li>• Всегда приезжает с оригинальными комплектующими</li>
                <li>• Даёт рекомендации по уходу, чтобы продлить срок службы</li>
              </ul>
              <p className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                «Большинство проблем решаются регулировкой и правильным уплотнителем — без замены всего окна».
              </p>
            </article>
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-3">
                Отзывы без общих фраз
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Люди, которые уже прошли путь от «боюсь наценок и кривого монтажа» до тёплых и тихих комнат.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
              <p className="text-sm text-gray-700 mb-4">
                «Больше всего боялась, что на месте скажут: &quot;а вот за демонтаж, вынос мусора и подоконник
                доплатите&quot;. В итоге финальная сумма совпала с договором до рубля. Монтажники сами закрыли плёнкой
                мебель и после уборки реально не было ощущения ремонта».
              </p>
              <p className="text-xs text-gray-500 mb-1">
                Проверка тепловизором показала ровный контур без промерзаний.
              </p>
              <p className="text-sm font-medium text-gray-900">
                Анна, Химки, замена 4 окон в квартире
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
              <p className="text-sm text-gray-700 mb-4">
                «На прошлом балконе через зиму всё покрылось плесенью, поэтому очень переживал за утепление. Здесь
                сделали проект, показали, какие материалы и в каком порядке будут укладывать. Через первую зиму стены
                сухие, на тепловизоре — никаких синих пятен».
              </p>
              <p className="text-xs text-gray-500 mb-1">
                В договор сразу включили вынос старых рам и отделку.
              </p>
              <p className="text-sm font-medium text-gray-900">
                Сергей, Мытищи, тёплое остекление балкона
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
              <p className="text-sm text-gray-700 mb-4">
                «Окна стояли уже три года, створки провисли, начали задевать раму. Думала, придётся всё менять. Дмитрий
                отрегулировал фурнитуру, поменял уплотнитель и ручки. Стало тихо, ничего не скрипит и не дует. Всё по
                заранее озвученной цене, без &quot;а вот это отдельно&quot;».
              </p>
              <p className="text-xs text-gray-500 mb-1">
                Визуально и по ощущениям — как новые окна.
              </p>
              <p className="text-sm font-medium text-gray-900">
                Ирина, Москва, сервисное обслуживание
              </p>
            </article>
          </div>
        </section>

        <section className="mb-10 sm:mb-12 lg:mb-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-3">
                Записаться на замер без обязательств
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl">
                Замерщик приедет в удобное для вас время с образцами профиля и фурнитуры. На месте составит подробную
                смету с погрешностью до&nbsp;5% и покажет, где можно сэкономить без потери качества.
              </p>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Без предоплаты за выезд и измерения</li>
                <li>• Смета и договор — в электронном виде в день визита</li>
                <li>• Возможность поэтапной установки окон по комнатам</li>
              </ul>

              <p className="text-xs text-gray-500">
                Мы не передаём контакты сторонним организациям и не навязываем допуслуги. Свяжемся только для уточнения
                деталей и согласования времени выезда.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-gray-50/60 p-5 sm:p-6 lg:p-7">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Как к вам обращаться"
                      className="block w-full rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="block w-full rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs font-medium text-gray-700 mb-1">
                    Город / район
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Например: Москва, Химки"
                    className="block w-full rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1">
                    Что нужно сделать
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="block w-full rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Выберите услугу
                    </option>
                    <option value="install">Монтаж / демонтаж пластиковых окон</option>
                    <option value="balcony">Остекление и утепление балкона</option>
                    <option value="service">Ремонт и обслуживание существующих окон</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-xs font-medium text-gray-700 mb-1">
                    Комментарий (по желанию)
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    placeholder="Опишите, сколько окон или какой балкон, в какое время удобен замер…"
                    className="block w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <div className="space-y-3 pt-1">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition"
                  >
                    Записаться на бесплатный замер
                  </button>
                  <p className="text-[11px] text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных только в рамках расчёта стоимости
                    и организации монтажа.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-100 pt-5 mt-5 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} ЭКООКНА. Все права защищены.</p>
          <p>Фиксированная цена в договоре. Гарантия на монтаж — 5 лет.</p>
        </footer>
      </div>
    </div>
  )
}

export default EcoOknaLanding

