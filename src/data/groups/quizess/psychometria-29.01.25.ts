import { Quiz } from "../../../types/quiz";

export const quiz: Quiz = {
    label: "Psychometria",
    alias: "psychometria",
    quizzes: [{
        label: "Test z psychometrii",
        alias: "test-psychometria",
        questions: [
            {
                question: "Jeżeli w wyniku CFA współczynnik RMSEA wynosi 0,06, dopasowanie jest:",
                answers: [
                    "znakomite",
                    "umiarkowane",
                    "bardzo słabe",
                    "zdecydowanie nieodpowiednie"
                ],
                correct: 0,
                explanation: "RMSEA (Root Mean Square Error of Approximation) poniżej 0.08 oznacza dobre dopasowanie modelu, a wartość 0.06 jest uznawana za znakomite dopasowanie."
            },
            {
                question: "Jako podstawę do badania trafności teoretycznej za pomocą analizy różnic międzygrupowych można zastosować:",
                answers: [
                    "badanie samoopisu skalą samooceny (SES) w grupie z rozpoznaną depresją kliniczną i w grupie zdrowej, wyrównanych ze względu na płeć i wiek",
                    "badanie samoopisu i szacowania skalą samooceny (SES) Morrisa Rosenberga",
                    "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga przed eksperymentem - w którym badani doświadczali porażek albo sukcesów - i po nim",
                    "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga bez przerwy czasowej"
                ],
                correct: 0,
                explanation: "Analiza różnic międzygrupowych jest właściwą metodą badania trafności teoretycznej, gdy porównujemy grupy różniące się ze względu na mierzony konstrukt (np. grupa kliniczna vs. kontrolna), przy czym grupy powinny być wyrównane pod względem innych istotnych zmiennych."
            },
            {
                question: "Gdy autor przeprowadził analizę CFA, zidentyfikował w swojej skali pozycję o najwyższym ładunku równym 0,70. Jeśli autor usunie tę pozycję ze skali, wysokość omegi MacDonalda najprawdopodobniej:",
                answers: [
                    "zmniejszy się",
                    "zwiększy się",
                    "nie zmieni się",
                    "nie wiadomo co się stanie, bo ładunki czynnikowe i omega MacDonalda zależą od zupełnie innych aspektów testu"
                ],
                correct: 0,
                explanation: "Usunięcie pozycji o wysokim ładunku czynnikowym spowoduje zmniejszenie się współczynnika rzetelności omegi MacDonalda, ponieważ pozycje o wysokich ładunkach wnoszą najwięcej do ogólnej spójności skali."
            },
            {
                question: "Analiza czynnikowa:",
                answers: [
                    "polega na eksploracji danych, a następnie ekstrapolacji uzyskanego rozwiązania",
                    "to metoda analizy danych, w której identyfikujemy mniejszą liczbę wymiarów w większym zbiorze pozycji w teście",
                    "powinna być stosowana do budowy testów składających się z pytań o zróżnicowanej trudności",
                    "składa się z dwóch etapów - analizy wariancji i ekstrapolacji"
                ],
                correct: 1,
                explanation: "Analiza czynnikowa jest metodą redukcji danych, która pozwala na identyfikację ukrytych wymiarów (czynników) w większym zbiorze zmiennych, co umożliwia uproszczenie struktury danych przy zachowaniu maksimum informacji."
            },
            {
                question: "Jedna ze strategii adaptacji kulturowej testu jest rekonstrukcja, która polega na:",
                answers: [
                    "opracowaniu zupełnie nowego testu, dla którego inspiracją jest oryginalny model teoretyczny i strategia konstrukcji",
                    "opracowaniu zupełnie nowego testu, dla którego inspiracją jest test oryginalny i większość itemów jest generowana na podstawie pozycji oryginalnych",
                    "przekładzie oryginalnych pozycji testu niedopuszczającym żadnych modyfikacji",
                    "przekładzie oryginalnych pozycji testu dopuszczającym wszystkie modyfikacje, które badacz uważa za niezbędne"
                ],
                correct: 0,
                explanation: "Rekonstrukcja to najbardziej radykalna forma adaptacji, która polega na stworzeniu całkowicie nowego narzędzia, zachowując jedynie oryginalny model teoretyczny i strategię konstrukcji, bez bezpośredniego tłumaczenia itemów."
            },
            {
                question: "Jeżeli w wyniku CFA współczynnik RMSEA wynosi 0,06, dopasowanie jest:",
                answers: [
                    "znakomite",
                    "umiarkowane",
                    "bardzo słabe",
                    "zdecydowanie nieodpowiednie"
                ],
                correct: 0,
                explanation: "RMSEA (Root Mean Square Error of Approximation) poniżej 0.08 oznacza dobre dopasowanie modelu, a wartość 0.06 jest uznawana za znakomite dopasowanie."
            },
            {
                question: "Jako podstawę do badania trafności teoretycznej za pomocą analizy różnic międzygrupowych można zastosować:",
                answers: [
                    "badanie samoopisu skalą samooceny (SES) w grupie z rozpoznaną depresją kliniczną i w grupie zdrowej, wyrównanych ze względu na płeć i wiek",
                    "badanie samoopisu i szacowania skalą samooceny (SES) Morrisa Rosenberga",
                    "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga przed eksperymentem - w którym badani doświadczali porażek albo sukcesów - i po nim",
                    "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga bez przerwy czasowej"
                ],
                correct: 0,
                explanation: "Analiza różnic międzygrupowych jest właściwą metodą badania trafności teoretycznej, gdy porównujemy grupy różniące się ze względu na mierzony konstrukt (np. grupa kliniczna vs. kontrolna), przy czym grupy powinny być wyrównane pod względem innych istotnych zmiennych."
            },
            {
                question: "Gdy autor przeprowadził analizę CFA, zidentyfikował w swojej skali pozycję o najwyższym ładunku równym 0,70. Jeśli autor usunie tę pozycję ze skali, wysokość omegi MacDonalda najprawdopodobniej:",
                answers: [
                    "zmniejszy się",
                    "zwiększy się",
                    "nie zmieni się",
                    "nie wiadomo co się stanie, bo ładunki czynnikowe i omega MacDonalda zależą od zupełnie innych aspektów testu"
                ],
                correct: 0,
                explanation: "Usunięcie pozycji o wysokim ładunku czynnikowym spowoduje zmniejszenie się współczynnika rzetelności omegi MacDonalda, ponieważ pozycje o wysokich ładunkach wnoszą najwięcej do ogólnej spójności skali."
            },
            {
                question: "Analiza czynnikowa:",
                answers: [
                    "polega na eksploracji danych, a następnie ekstrapolacji uzyskanego rozwiązania",
                    "to metoda analizy danych, w której identyfikujemy mniejszą liczbę wymiarów w większym zbiorze pozycji w teście",
                    "powinna być stosowana do budowy testów składających się z pytań o zróżnicowanej trudności",
                    "składa się z dwóch etapów - analizy wariancji i ekstrapolacji"
                ],
                correct: 1,
                explanation: "Analiza czynnikowa jest metodą redukcji danych, która pozwala na identyfikację ukrytych wymiarów (czynników) w większym zbiorze zmiennych, co umożliwia uproszczenie struktury danych przy zachowaniu maksimum informacji."
            },
            {
                question: "Jedna ze strategii adaptacji kulturowej testu jest rekonstrukcja, która polega na:",
                answers: [
                    "opracowaniu zupełnie nowego testu, dla którego inspiracją jest oryginalny model teoretyczny i strategia konstrukcji",
                    "opracowaniu zupełnie nowego testu, dla którego inspiracją jest test oryginalny i większość itemów jest generowana na podstawie pozycji oryginalnych",
                    "przekładzie oryginalnych pozycji testu niedopuszczającym żadnych modyfikacji",
                    "przekładzie oryginalnych pozycji testu dopuszczającym wszystkie modyfikacje, które badacz uważa za niezbędne"
                ],
                correct: 0,
                explanation: "Rekonstrukcja to najbardziej radykalna forma adaptacji, która polega na stworzeniu całkowicie nowego narzędzia, zachowując jedynie oryginalny model teoretyczny i strategię konstrukcji, bez bezpośredniego tłumaczenia itemów."
            },
            {
                question: "Gdy podczas walidacji chcemy porównać rozwiązanie trójczynnikowe i dwuczynnikowe, to precyzyjne parametry uzyskamy w wyniku analizy:",
                answers: [
                    "EFA",
                    "CFA",
                    "AUC",
                    "ROC"
                ],
                correct: 1,
                explanation: "Konfirmacyjna analiza czynnikowa (CFA) pozwala na precyzyjne porównanie dopasowania różnych modeli czynnikowych poprzez analizę wskaźników dopasowania."
            },
            {
                question: "Zalecana rzetelność testów przeznaczonych do badań naukowych wynosi:",
                answers: [
                    "poniżej 0,05",
                    "poniżej 0,01",
                    "powyżej 0,7",
                    "powyżej 0,95"
                ],
                correct: 2,
                explanation: "Minimalna akceptowalna wartość współczynnika rzetelności dla testów używanych w badaniach naukowych wynosi 0,7. Wartość ta zapewnia, że co najmniej 49% wariancji wyników zależy od rzeczywistego zróżnicowania, a nie od błędu pomiaru."
            },
            {
                question: "Testy, których nie poddano pełnej procedurze adaptacji kulturowej (np. nie mają opracowanych polskich norm), można stosować wyłącznie:",
                answers: [
                    "w odniesieniu do pojedynczych osób",
                    "w rekrutacji i selekcji",
                    "wśród młodzieży szkolnej",
                    "w badaniach naukowych"
                ],
                correct: 3,
                explanation: "Testy bez pełnej adaptacji kulturowej i norm mogą być stosowane wyłącznie w badaniach naukowych, gdzie nie podejmuje się decyzji o jednostkach, a wyniki są analizowane na poziomie grupowym."
            },
            {
                question: "Badacz przeprowadził analizę EFA na próbie 370 osób badanych. Następnie na tej samej próbie przetestował za pomocą analizy CFA dopasowanie do modelu wyodrębnionego podczas analizy EFA. Uzyskał bardzo wysoki poziom dopasowania. Badacz postąpił:",
                answers: [
                    "słusznie - ponieważ należy maksymalnie wykorzystać zebrane dane",
                    "słusznie - ponieważ analizy EFA i CFA należy stosować jednocześnie",
                    "niesłusznie - ponieważ analizę CFA należało przeprowadzić na innej próbie",
                    "niesłusznie - ponieważ najpierw powinien wykonać analizę CFA, a później analizę EFA"
                ],
                correct: 2,
                explanation: "Jest to błędne podejście metodologiczne, ponieważ CFA służy do potwierdzenia struktury na nowej próbie. Użycie tej samej próby do EFA i CFA prowadzi do sztucznego zawyżenia wskaźników dopasowania."
            },
            {
                question: "Każdy współczynnik rzetelności można interpretować jako:",
                answers: [
                    "odsetek wariancji wyników prawdziwych determinowanych przez wyniki otrzymane",
                    "odsetek wariancji wyników otrzymanych determinowanych przez wyniki prawdziwe",
                    "współczynnik zbieżności",
                    "współczynnik rozbieżności"
                ],
                correct: 1,
                explanation: "Współczynnik rzetelności podniesiony do kwadratu informuje, jaki procent wariancji wyników otrzymanych jest determinowany przez wyniki prawdziwe."
            },
            {
                question: "Co oznacza skrót AUC?",
                answers: [
                    "pole pod krzywą ROC",
                    "pole pod krzywą osypiska",
                    "analiza ujemnej częstości",
                    "analiza unikalnej pewności"
                ],
                correct: 0,
                explanation: "AUC (Area Under Curve) oznacza pole pod krzywą ROC (Receiver Operating Characteristic). Jest to wskaźnik ogólnej trafności diagnostycznej testu, przyjmujący wartości od 0 do 1."
            },
            {
                question: "Zmienne latentne na diagramie ścieżkowym reprezentowane są jako:",
                answers: [
                    "prostokąty",
                    "okręgi",
                    "strzałki jednokierunkowe",
                    "strzałki dwukierunkowe"
                ],
                correct: 1,
                explanation: "W diagramach ścieżkowych zmienne latentne (ukryte) reprezentowane są jako okręgi lub elipsy, natomiast zmienne obserwowalne jako prostokąty."
            },
            {
                question: "Konfirmacyjna analiza czynnikowa:",
                answers: [
                    "zwykle jest stosowana, by wstępnie wyodrębnić czynniki w bazie zebranych danych psychometrycznych",
                    "pozwala precyzyjnie potwierdzić lub odrzucić testowany model",
                    "nakłada jedynie minimum restrykcji na zakładany model czynnikowy",
                    "żadna odpowiedź nie jest poprawna"
                ],
                correct: 1,
                explanation: "CFA jest metodą weryfikacyjną, która pozwala na precyzyjne testowanie dopasowania określonego modelu teoretycznego do danych empirycznych poprzez szereg wskaźników dopasowania."
            },
            {
                question: "Metoda badania wewnętrznej struktury testu jest:",
                answers: [
                    "metodą badania jego trafności",
                    "metodą badania jego rzetelności",
                    "odmianą analizy itemmetrycznej stosowaną podczas budowy testu według zewnętrznej strategii konstruowania",
                    "żadna odpowiedź nie jest poprawna"
                ],
                correct: 0,
                explanation: "Badanie wewnętrznej struktury testu jest jedną z metod analizy trafności teoretycznej, pozwalającą sprawdzić, czy struktura empiryczna odpowiada założeniom teoretycznym."
            },
            {
                question: "Jeśli autorzy piszą, że oszacowali stabilność bezwzględną jako miarę rzetelności testu psychologicznego, to obliczyli:",
                answers: [
                    "alfę Cronbacha",
                    "korelacje między wersjami równoległymi testu, badanymi z odstępem czasu",
                    "korelacje między dwoma badaniami tym samym testem z odstępem czasu",
                    "korelacje między dwoma badaniami tym samym testem bez odstępu czasu"
                ],
                correct: 2,
                explanation: "Stabilność bezwzględna to metoda szacowania rzetelności poprzez korelację wyników tego samego testu przeprowadzonego dwukrotnie na tej samej grupie osób z odstępem czasowym (test-retest)."
            },
            {
                question: "Macierz wielu cech - wielu metod wykorzystujemy:",
                answers: [
                    "na etapie planowania i generowania pozycji testu",
                    "na etapie planowania i przeprowadzania badań normalizacyjnych",
                    "na etapie planowania i przeprowadzania badań walidacyjnych",
                    "aby wybrać odpowiednią strategię konstrukcji testu"
                ],
                correct: 2,
                explanation: "Macierz wielu cech - wielu metod (MTMM) jest narzędziem wykorzystywanym w badaniach walidacyjnych do oceny trafności zbieżnej i różnicowej testu."
            },
            {
                question: "Aspekt zbieżny i różnicowy dotyczy analizy trafności:",
                answers: [
                    "treściowej",
                    "teoretycznej",
                    "kryterialnej",
                    "czynnikowej"
                ],
                correct: 1,
                explanation: "Aspekt zbieżny i różnicowy są elementami analizy trafności teoretycznej, gdzie badamy korelacje testu z innymi narzędziami mierzącymi podobne (zbieżność) i odmienne (różnicowość) konstrukty."
            },
            {
                question: "Podczas konfirmacyjnej analizy czynnikowej dokonujemy:",
                answers: [
                    "oceny stopnia zrozumiałości pozycji",
                    "wyboru pomiędzy modelem ukośnym a ortogonalnym",
                    "oceny sędziów kompetentnych",
                    "obliczenia błędu aproksymacji (RMSEA)"
                ],
                correct: 3,
                explanation: "W CFA jednym z kluczowych wskaźników dopasowania modelu jest RMSEA (Root Mean Square Error of Approximation), który ocenia błąd aproksymacji modelu."
            },
            {
                question: "Metodę adaptacji testu psychologicznego, która polega na maksymalnie wiernym tłumaczeniu oryginalnych pozycji, nazywamy:",
                answers: [
                    "transkrypcją",
                    "trawestacją",
                    "rekonstrukcją",
                    "translacją"
                ],
                correct: 0,
                explanation: "Transkrypcja to najbardziej zachowawcza strategia adaptacji testu, polegająca na maksymalnie wiernym tłumaczeniu pozycji z wprowadzeniem tylko niezbędnych poprawek językowych."
            },
                                {
                                    question: "Jeżeli współczynnik trafności w badaniu wyniósł 0,47, trafność pomiaru testem jest:",
                                    answers: [
                                        "niska i niewystarczająca, by zastosować test w badaniach naukowych",
                                        "minimalna i można zastosować test w badaniach naukowych",
                                        "wystarczająca, by zastosować test w procesach diagnozy",
                                        "żadna odpowiedź nie jest poprawna"
                                    ],
                                    correct: 3,
                                    explanation: "Nie można jednoznacznie ocenić poziomu trafności tylko na podstawie pojedynczej wartości współczynnika. Interpretacja trafności wymaga uwzględnienia kontekstu badania, typu trafności i celu wykorzystania testu."
                                },
                                {
                                    question: "Jeżeli w wyniku CFA współczynnik RMSEA wynosi 0,06, dopasowanie jest:",
                                    answers: [
                                        "znakomite",
                                        "umiarkowane", 
                                        "bardzo słabe",
                                        "zdecydowanie nieodpowiednie"
                                    ],
                                    correct: 0,
                                    explanation: "RMSEA (Root Mean Square Error of Approximation) poniżej 0.08 oznacza dobre dopasowanie modelu, a wartość 0.06 jest uznawana za znakomite dopasowanie."
                                },
                                {
                                    question: "Jako podstawę do badania trafności teoretycznej za pomocą analizy różnic międzygrupowych można zastosować:",
                                    answers: [
                                        "badanie samoopisu skalą samooceny (SES) w grupie z rozpoznaną depresją kliniczną i w grupie zdrowej, wyrównanych ze względu na płeć i wiek",
                                        "badanie samoopisu i szacowania skalą samooceny (SES) Morrisa Rosenberga",
                                        "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga przed eksperymentem - w którym badani doświadczali porażek albo sukcesów - i po nim",
                                        "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga bez przerwy czasowej"
                                    ],
                                    correct: 0,
                                    explanation: "Analiza różnic międzygrupowych jest właściwą metodą badania trafności teoretycznej, gdy porównujemy grupy różniące się ze względu na mierzony konstrukt (np. grupa kliniczna vs. kontrolna), przy czym grupy powinny być wyrównane pod względem innych istotnych zmiennych."
                                },
                                {
                                    question: "Gdy autor przeprowadził analizę CFA, zidentyfikował w swojej skali pozycję o najwyższym ładunku równym 0,70. Jeśli autor usunie tę pozycję ze skali, wysokość omegi MacDonalda najprawdopodobniej:",
                                    answers: [
                                        "zmniejszy się",
                                        "zwiększy się",
                                        "nie zmieni się",
                                        "nie wiadomo co się stanie, bo ładunki czynnikowe i omega MacDonalda zależą od zupełnie innych aspektów testu"
                                    ],
                                    correct: 0,
                                    explanation: "Usunięcie pozycji o wysokim ładunku czynnikowym spowoduje zmniejszenie się współczynnika rzetelności omegi MacDonalda, ponieważ pozycje o wysokich ładunkach wnoszą najwięcej do ogólnej spójności skali."
                                },
                                {
                                    question: "Analiza czynnikowa:",
                                    answers: [
                                        "polega na eksploracji danych, a następnie ekstrapolacji uzyskanego rozwiązania",
                                        "to metoda analizy danych, w której identyfikujemy mniejszą liczbę wymiarów w większym zbiorze pozycji w teście",
                                        "powinna być stosowana do budowy testów składających się z pytań o zróżnicowanej trudności",
                                        "składa się z dwóch etapów - analizy wariancji i ekstrapolacji"
                                    ],
                                    correct: 1,
                                    explanation: "Analiza czynnikowa jest metodą redukcji danych, która pozwala na identyfikację ukrytych wymiarów (czynników) w większym zbiorze zmiennych, co umożliwia uproszczenie struktury danych przy zachowaniu maksimum informacji."
                                },
                                {
                                    question: "Jedna ze strategii adaptacji kulturowej testu jest rekonstrukcja, która polega na:",
                                    answers: [
                                        "opracowaniu zupełnie nowego testu, dla którego inspiracją jest oryginalny model teoretyczny i strategia konstrukcji",
                                        "opracowaniu zupełnie nowego testu, dla którego inspiracją jest test oryginalny i większość itemów jest generowana na podstawie pozycji oryginalnych",
                                        "przekładzie oryginalnych pozycji testu niedopuszczającym żadnych modyfikacji",
                                        "przekładzie oryginalnych pozycji testu dopuszczającym wszystkie modyfikacje, które badacz uważa za niezbędne"
                                    ],
                                    correct: 0,
                                    explanation: "Rekonstrukcja to najbardziej radykalna forma adaptacji, która polega na stworzeniu całkowicie nowego narzędzia, zachowując jedynie oryginalny model teoretyczny i strategię konstrukcji, bez bezpośredniego tłumaczenia itemów."
                                },
                                {
                                    question: "Gdy podczas walidacji chcemy porównać rozwiązanie trójczynnikowe i dwuczynnikowe, to precyzyjne parametry uzyskamy w wyniku analizy:",
                                    answers: [
                                        "EFA",
                                        "CFA",
                                        "AUC",
                                        "ROC"
                                    ],
                                    correct: 1,
                                    explanation: "Konfirmacyjna analiza czynnikowa (CFA) pozwala na precyzyjne porównanie dopasowania różnych modeli czynnikowych poprzez analizę wskaźników dopasowania."
                                },
                                {
                                    question: "Zalecana rzetelność testów przeznaczonych do badań naukowych wynosi:",
                                    answers: [
                                        "poniżej 0,05",
                                        "poniżej 0,01",
                                        "powyżej 0,7",
                                        "powyżej 0,95"
                                    ],
                                    correct: 2,
                                    explanation: "Minimalna akceptowalna wartość współczynnika rzetelności dla testów używanych w badaniach naukowych wynosi 0,7. Wartość ta zapewnia, że co najmniej 49% wariancji wyników zależy od rzeczywistego zróżnicowania, a nie od błędu pomiaru."
                                },
                                {
                                    question: "Testy, których nie poddano pełnej procedurze adaptacji kulturowej (np. nie mają opracowanych polskich norm), można stosować wyłącznie:",
                                    answers: [
                                        "w odniesieniu do pojedynczych osób",
                                        "w rekrutacji i selekcji",
                                        "wśród młodzieży szkolnej",
                                        "w badaniach naukowych"
                                    ],
                                    correct: 3,
                                    explanation: "Testy bez pełnej adaptacji kulturowej i norm mogą być stosowane wyłącznie w badaniach naukowych, gdzie nie podejmuje się decyzji o jednostkach, a wyniki są analizowane na poziomie grupowym."
                                },
                                {
                                    question: "Badacz przeprowadził analizę EFA na próbie 370 osób badanych. Następnie na tej samej próbie przetestował za pomocą analizy CFA dopasowanie do modelu wyodrębnionego podczas analizy EFA. Uzyskał bardzo wysoki poziom dopasowania. Badacz postąpił:",
                                    answers: [
                                        "słusznie - ponieważ należy maksymalnie wykorzystać zebrane dane",
                                        "słusznie - ponieważ analizy EFA i CFA należy stosować jednocześnie",
                                        "niesłusznie - ponieważ analizę CFA należało przeprowadzić na innej próbie",
                                        "niesłusznie - ponieważ najpierw powinien wykonać analizę CFA, a później analizę EFA"
                                    ],
                                    correct: 2,
                                    explanation: "Jest to błędne podejście metodologiczne, ponieważ CFA służy do potwierdzenia struktury na nowej próbie. Użycie tej samej próby do EFA i CFA prowadzi do sztucznego zawyżenia wskaźników dopasowania."
                                },
                                {
                                    question: "Każdy współczynnik rzetelności można interpretować jako:",
                                    answers: [
                                        "odsetek wariancji wyników prawdziwych determinowanych przez wyniki otrzymane",
                                        "odsetek wariancji wyników otrzymanych determinowanych przez wyniki prawdziwe",
                                        "współczynnik zbieżności",
                                        "współczynnik rozbieżności"
                                    ],
                                    correct: 1,
                                    explanation: "Współczynnik rzetelności podniesiony do kwadratu informuje, jaki procent wariancji wyników otrzymanych jest determinowany przez wyniki prawdziwe."
                                },
                                {
                                    question: "Co oznacza skrót AUC?",
                                    answers: [
                                        "pole pod krzywą ROC",
                                        "pole pod krzywą osypiska",
                                        "analiza ujemnej częstości",
                                        "analiza unikalnej pewności"
                                    ],
                                    correct: 0,
                                    explanation: "AUC (Area Under Curve) oznacza pole pod krzywą ROC (Receiver Operating Characteristic). Jest to wskaźnik ogólnej trafności diagnostycznej testu, przyjmujący wartości od 0 do 1."
                                },
                                {
                                    question: "Zmienne latentne na diagramie ścieżkowym reprezentowane są jako:",
                                    answers: [
                                        "prostokąty",
                                        "okręgi",
                                        "strzałki jednokierunkowe",
                                        "strzałki dwukierunkowe"
                                    ],
                                    correct: 1,
                                    explanation: "W diagramach ścieżkowych zmienne latentne (ukryte) reprezentowane są jako okręgi lub elipsy, natomiast zmienne obserwowalne jako prostokąty."
                                },
                                {
                                    question: "Konfirmacyjna analiza czynnikowa:",
                                    answers: [
                                        "zwykle jest stosowana, by wstępnie wyodrębnić czynniki w bazie zebranych danych psychometrycznych",
                                        "pozwala precyzyjnie potwierdzić lub odrzucić testowany model",
                                        "nakłada jedynie minimum restrykcji na zakładany model czynnikowy",
                                        "żadna odpowiedź nie jest poprawna"
                                    ],
                                    correct: 1,
                                    explanation: "CFA jest metodą weryfikacyjną, która pozwala na precyzyjne testowanie dopasowania określonego modelu teoretycznego do danych empirycznych poprzez szereg wskaźników dopasowania."
                                },
                                {
                                    question: "Metoda badania wewnętrznej struktury testu jest:",
                                    answers: [
                                        "metodą badania jego trafności",
                                        "metodą badania jego rzetelności",
                                        "odmianą analizy itemmetrycznej stosowaną podczas budowy testu według zewnętrznej strategii konstruowania",
                                        "żadna odpowiedź nie jest poprawna"
                                    ],
                                    correct: 0,
                                    explanation: "Badanie wewnętrznej struktury testu jest jedną z metod analizy trafności teoretycznej, pozwalającą sprawdzić, czy struktura empiryczna odpowiada założeniom teoretycznym."
                                },
                                {
                                    question: "Jeśli autorzy piszą, że oszacowali stabilność bezwzględną jako miarę rzetelności testu psychologicznego, to obliczyli:",
                                    answers: [
                                        "alfę Cronbacha",
                                        "korelacje między wersjami równoległymi testu, badanymi z odstępem czasu",
                                        "korelacje między dwoma badaniami tym samym testem z odstępem czasu",
                                        "korelacje między dwoma badaniami tym samym testem bez odstępu czasu"
                                    ],
                                    correct: 2,
                                    explanation: "Stabilność bezwzględna to metoda szacowania rzetelności poprzez korelację wyników tego samego testu przeprowadzonego dwukrotnie na tej samej grupie osób z odstępem czasowym (test-retest)."
                                },
                                {
                                    question: "Macierz wielu cech - wielu metod wykorzystujemy:",
                                    answers: [
                                        "na etapie planowania i generowania pozycji testu",
                                        "na etapie planowania i przeprowadzania badań normalizacyjnych",
                                        "na etapie planowania i przeprowadzania badań walidacyjnych",
                                        "aby wybrać odpowiednią strategię konstrukcji testu"
                                    ],
                                    correct: 2,
                                    explanation: "Macierz wielu cech - wielu metod (MTMM) jest narzędziem wykorzystywanym w badaniach walidacyjnych do oceny trafności zbieżnej i różnicowej testu."
                                },
                                {
                                    question: "Aspekt zbieżny i różnicowy dotyczy analizy trafności:",
                                    answers: [
                                        "treściowej",
                                        "teoretycznej",
                                        "kryterialnej",
                                        "czynnikowej"
                                    ],
                                    correct: 1,
                                    explanation: "Aspekt zbieżny i różnicowy są elementami analizy trafności teoretycznej, gdzie badamy korelacje testu z innymi narzędziami mierzącymi podobne (zbieżność) i odmienne (różnicowość) konstrukty."
                                },
                                {
                                    question: "Podczas konfirmacyjnej analizy czynnikowej dokonujemy:",
                                    answers: [
                                        "oceny stopnia zrozumiałości pozycji",
                                        "wyboru pomiędzy modelem ukośnym a ortogonalnym",
                                        "oceny sędziów kompetentnych",
                                        "obliczenia błędu aproksymacji (RMSEA)"
                                    ],
                                    correct: 3,
                                    explanation: "W CFA jednym z kluczowych wskaźników dopasowania modelu jest RMSEA (Root Mean Square Error of Approximation), który ocenia błąd aproksymacji modelu."
                                },
                                {
                                    question: "Metodę adaptacji testu psychologicznego, która polega na maksymalnie wiernym tłumaczeniu oryginalnych pozycji, nazywamy:",
                                    answers: [
                                        "transkrypcją",
                                        "trawestacją",
                                        "rekonstrukcją",
                                        "translacją"
                                    ],
                                    correct: 0,
                                    explanation: "Transkrypcja to najbardziej zachowawcza strategia adaptacji testu, polegająca na maksymalnie wiernym tłumaczeniu oryginalnych pozycji testowych, z wprowadzeniem tylko niezbędnych poprawek językowych. Jest to podejście zakładające pełną uniwersalność kulturową konstruktu i jego wskaźników."
                                },
                                {
                                    question: "Jeżeli w wyniku CFA współczynnik RMSEA wynosi 0,06, dopasowanie jest:",
                                    answers: [
                                        "znakomite",
                                        "umiarkowane",
                                        "bardzo słabe",
                                        "zdecydowanie nieodpowiednie"
                                    ],
                                    correct: 0,
                                    explanation: "RMSEA (Root Mean Square Error of Approximation) poniżej 0.08 oznacza dobre dopasowanie modelu, a wartość 0.06 jest uznawana za znakomite dopasowanie."
                                },
                                {
                                    question: "Jako podstawę do badania trafności teoretycznej za pomocą analizy różnic międzygrupowych można zastosować:",
                                    answers: [
                                        "badanie samoopisu skalą samooceny (SES) w grupie z rozpoznaną depresją kliniczną i w grupie zdrowej, wyrównanych ze względu na płeć i wiek",
                                        "badanie samoopisu i szacowania skalą samooceny (SES) Morrisa Rosenberga",
                                        "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga przed eksperymentem - w którym badani doświadczali porażek albo sukcesów - i po nim",
                                        "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga bez przerwy czasowej"
                                    ],
                                    correct: 0,
                                    explanation: "Analiza różnic międzygrupowych jest właściwą metodą badania trafności teoretycznej, gdy porównujemy grupy różniące się ze względu na mierzony konstrukt (np. grupa kliniczna vs. kontrolna), przy czym grupy powinny być wyrównane pod względem innych istotnych zmiennych."
                                },
                                {
                                    question: "Gdy autor przeprowadził analizę CFA, zidentyfikował w swojej skali pozycję o najwyższym ładunku równym 0,70. Jeśli autor usunie tę pozycję ze skali, wysokość omegi MacDonalda najprawdopodobniej:",
                                    answers: [
                                        "zmniejszy się",
                                        "zwiększy się",
                                        "nie zmieni się",
                                        "nie wiadomo co się stanie, bo ładunki czynnikowe i omega MacDonalda zależą od zupełnie innych aspektów testu"
                                    ],
                                    correct: 0,
                                    explanation: "Usunięcie pozycji o wysokim ładunku czynnikowym spowoduje zmniejszenie się współczynnika rzetelności omegi MacDonalda, ponieważ pozycje o wysokich ładunkach wnoszą najwięcej do ogólnej spójności skali."
                                },
                                {
                                    question: "Analiza czynnikowa:",
                                    answers: [
                                        "polega na eksploracji danych, a następnie ekstrapolacji uzyskanego rozwiązania",
                                        "to metoda analizy danych, w której identyfikujemy mniejszą liczbę wymiarów w większym zbiorze pozycji w teście",
                                        "powinna być stosowana do budowy testów składających się z pytań o zróżnicowanej trudności",
                                        "składa się z dwóch etapów - analizy wariancji i ekstrapolacji"
                                    ],
                                    correct: 1,
                                    explanation: "Analiza czynnikowa jest metodą redukcji danych, która pozwala na identyfikację ukrytych wymiarów (czynników) w większym zbiorze zmiennych, co umożliwia uproszczenie struktury danych przy zachowaniu maksimum informacji."
                                },
                                {
                                    question: "Jedna ze strategii adaptacji kulturowej testu jest rekonstrukcja, która polega na:",
                                    answers: [
                                        "opracowaniu zupełnie nowego testu, dla którego inspiracją jest oryginalny model teoretyczny i strategia konstrukcji",
                                        "opracowaniu zupełnie nowego testu, dla którego inspiracją jest test oryginalny i większość itemów jest generowana na podstawie pozycji oryginalnych",
                                        "przekładzie oryginalnych pozycji testu niedopuszczającym żadnych modyfikacji",
                                        "przekładzie oryginalnych pozycji testu dopuszczającym wszystkie modyfikacje, które badacz uważa za niezbędne"
                                    ],
                                    correct: 0,
                                    explanation: "Rekonstrukcja to najbardziej radykalna forma adaptacji, która polega na stworzeniu całkowicie nowego narzędzia, zachowując jedynie oryginalny model teoretyczny i strategię konstrukcji, bez bezpośredniego tłumaczenia itemów."
                                },
                                {
                                    question: "Gdy podczas walidacji chcemy porównać rozwiązanie trójczynnikowe i dwuczynnikowe, to precyzyjne parametry uzyskamy w wyniku analizy:",
                                    answers: [
                                        "EFA",
                                        "CFA",
                                        "AUC",
                                        "ROC"
                                    ],
                                    correct: 1,
                                    explanation: "Konfirmacyjna analiza czynnikowa (CFA) pozwala na precyzyjne porównanie dopasowania różnych modeli czynnikowych poprzez analizę wskaźników dopasowania."
                                },
                                {
                                    question: "Zalecana rzetelność testów przeznaczonych do badań naukowych wynosi:",
                                    answers: [
                                        "poniżej 0,05",
                                        "poniżej 0,01",
                                        "powyżej 0,7",
                                        "powyżej 0,95"
                                    ],
                                    correct: 2,
                                    explanation: "Minimalna akceptowalna wartość współczynnika rzetelności dla testów używanych w badaniach naukowych wynosi 0,7. Wartość ta zapewnia, że co najmniej 49% wariancji wyników zależy od rzeczywistego zróżnicowania, a nie od błędu pomiaru."
                                },
                                {
                                    question: "Testy, których nie poddano pełnej procedurze adaptacji kulturowej (np. nie mają opracowanych polskich norm), można stosować wyłącznie:",
                                    answers: [
                                        "w odniesieniu do pojedynczych osób",
                                        "w rekrutacji i selekcji",
                                        "wśród młodzieży szkolnej",
                                        "w badaniach naukowych"
                                    ],
                                    correct: 3,
                                    explanation: "Testy bez pełnej adaptacji kulturowej i norm mogą być stosowane wyłącznie w badaniach naukowych, gdzie nie podejmuje się decyzji o jednostkach, a wyniki są analizowane na poziomie grupowym."
                                },
                                {
                                    question: "Badacz przeprowadził analizę EFA na próbie 370 osób badanych. Następnie na tej samej próbie przetestował za pomocą analizy CFA dopasowanie do modelu wyodrębnionego podczas analizy EFA. Uzyskał bardzo wysoki poziom dopasowania. Badacz postąpił:",
                                    answers: [
                                        "słusznie - ponieważ należy maksymalnie wykorzystać zebrane dane",
                                        "słusznie - ponieważ analizy EFA i CFA należy stosować jednocześnie",
                                        "niesłusznie - ponieważ analizę CFA należało przeprowadzić na innej próbie",
                                        "niesłusznie - ponieważ najpierw powinien wykonać analizę CFA, a później analizę EFA"
                                    ],
                                    correct: 2,
                                    explanation: "Jest to błędne podejście metodologiczne, ponieważ CFA służy do potwierdzenia struktury na nowej próbie. Użycie tej samej próby do EFA i CFA prowadzi do sztucznego zawyżenia wskaźników dopasowania."
                                },
                                {
                                    question: "Każdy współczynnik rzetelności można interpretować jako:",
                                    answers: [
                                        "odsetek wariancji wyników prawdziwych determinowanych przez wyniki otrzymane",
                                        "odsetek wariancji wyników otrzymanych determinowanych przez wyniki prawdziwe",
                                        "współczynnik zbieżności",
                                        "współczynnik rozbieżności"
                                    ],
                                    correct: 1,
                                    explanation: "Współczynnik rzetelności podniesiony do kwadratu informuje, jaki procent wariancji wyników otrzymanych jest determinowany przez wyniki prawdziwe."
                                },
                                {
                                    question: "Co oznacza skrót AUC?",
                                    answers: [
                                        "pole pod krzywą ROC",
                                        "pole pod krzywą osypiska",
                                        "analiza ujemnej częstości",
                                        "analiza unikalnej pewności"
                                    ],
                                    correct: 0,
                                    explanation: "AUC (Area Under Curve) oznacza pole pod krzywą ROC (Receiver Operating Characteristic). Jest to wskaźnik ogólnej trafności diagnostycznej testu, przyjmujący wartości od 0 do 1."
                                },
                                {
                                    question: "Zmienne latentne na diagramie ścieżkowym reprezentowane są jako:",
                                    answers: [
                                        "prostokąty",
                                        "okręgi",
                                        "strzałki jednokierunkowe",
                                        "strzałki dwukierunkowe"
                                    ],
                                    correct: 1,
                                    explanation: "W diagramach ścieżkowych zmienne latentne (ukryte) reprezentowane są jako okręgi lub elipsy, natomiast zmienne obserwowalne jako prostokąty."
                                },
                                {
                                    question: "Konfirmacyjna analiza czynnikowa:",
                                    answers: [
                                        "zwykle jest stosowana, by wstępnie wyodrębnić czynniki w bazie zebranych danych psychometrycznych",
                                        "pozwala precyzyjnie potwierdzić lub odrzucić testowany model",
                                        "nakłada jedynie minimum restrykcji na zakładany model czynnikowy",
                                        "żadna odpowiedź nie jest poprawna"
                                    ],
                                    correct: 1,
                                    explanation: "CFA jest metodą weryfikacyjną, która pozwala na precyzyjne testowanie dopasowania określonego modelu teoretycznego do danych empirycznych poprzez szereg wskaźników dopasowania."
                                },
                                {
                                    question: "Metoda badania wewnętrznej struktury testu jest:",
                                    answers: [
                                        "metodą badania jego trafności",
                                        "metodą badania jego rzetelności",
                                        "odmianą analizy itemmetrycznej stosowaną podczas budowy testu według zewnętrznej strategii konstruowania",
                                        "żadna odpowiedź nie jest poprawna"
                                    ],
                                    correct: 0,
                                    explanation: "Badanie wewnętrznej struktury testu jest jedną z metod analizy trafności teoretycznej, pozwalającą sprawdzić, czy struktura empiryczna odpowiada założeniom teoretycznym."
                                },
                                {
                                    question: "Jeśli autorzy piszą, że oszacowali stabilność bezwzględną jako miarę rzetelności testu psychologicznego, to obliczyli:",
                                    answers: [
                                        "alfę Cronbacha",
                                        "korelacje między wersjami równoległymi testu, badanymi z odstępem czasu",
                                        "korelacje między dwoma badaniami tym samym testem z odstępem czasu",
                                        "korelacje między dwoma badaniami tym samym testem bez odstępu czasu"
                                    ],
                                    correct: 2,
                                    explanation: "Stabilność bezwzględna to metoda szacowania rzetelności poprzez korelację wyników tego samego testu przeprowadzonego dwukrotnie na tej samej grupie osób z odstępem czasowym (test-retest)."
                                },
                                {
                                    question: "Macierz wielu cech - wielu metod wykorzystujemy:",
                                    answers: [
                                        "na etapie planowania i generowania pozycji testu",
                                        "na etapie planowania i przeprowadzania badań normalizacyjnych",
                                        "na etapie planowania i przeprowadzania badań walidacyjnych",
                                        "aby wybrać odpowiednią strategię konstrukcji testu"
                                    ],
                                    correct: 2,
                                    explanation: "Macierz wielu cech - wielu metod (MTMM) jest narzędziem wykorzystywanym w badaniach walidacyjnych do oceny trafności zbieżnej i różnicowej testu."
                                },
                                {
                                    question: "Aspekt zbieżny i różnicowy dotyczy analizy trafności:",
                                    answers: [
                                        "treściowej",
                                        "teoretycznej",
                                        "kryterialnej",
                                        "czynnikowej"
                                    ],
                                    correct: 1,
                                    explanation: "Aspekt zbieżny i różnicowy są elementami analizy trafności teoretycznej, gdzie badamy korelacje testu z innymi narzędziami mierzącymi podobne (zbieżność) i odmienne (różnicowość) konstrukty."
                                },
                                {
                                    question: "Podczas konfirmacyjnej analizy czynnikowej dokonujemy:",
                                    answers: [
                                        "oceny stopnia zrozumiałości pozycji",
                                        "wyboru pomiędzy modelem ukośnym a ortogonalnym",
                                        "oceny sędziów kompetentnych",
                                        "obliczenia błędu aproksymacji (RMSEA)"
                                    ],
                                    correct: 3,
                                    explanation: "W CFA jednym z kluczowych wskaźników dopasowania modelu jest RMSEA (Root Mean Square Error of Approximation), który ocenia błąd aproksymacji modelu."
                                },
                                {
                                    question: "Metodę adaptacji testu psychologicznego, która polega na maksymalnie wiernym tłumaczeniu oryginalnych pozycji, nazywamy:",
                                    answers: [
                                        "transkrypcją",
                                        "trawestacją",
                                        "rekonstrukcją",
                                        "translacją"
                                    ],
                                    correct: 0,
                                    explanation: "Transkrypcja to najbardziej zachowawcza strategia adaptacji testu, polegająca na maksymalnie wiernym tłumaczeniu pozycji z wprowadzeniem tylko niezbędnych poprawek językowych."
                                },
                                                    {
                                                        question: "Jeżeli współczynnik trafności w badaniu wyniósł 0,47, trafność pomiaru testem jest:",
                                                        answers: [
                                                            "niska i niewystarczająca, by zastosować test w badaniach naukowych",
                                                            "minimalna i można zastosować test w badaniach naukowych",
                                                            "wystarczająca, by zastosować test w procesach diagnozy",
                                                            "żadna odpowiedź nie jest poprawna"
                                                        ],
                                                        correct: 3,
                                                        explanation: "Nie można jednoznacznie ocenić poziomu trafności tylko na podstawie pojedynczej wartości współczynnika. Interpretacja trafności wymaga uwzględnienia kontekstu badania, typu trafności i celu wykorzystania testu."
                                                    },
                                                    {
                                                        question: "Jeżeli w wyniku CFA współczynnik RMSEA wynosi 0,06, dopasowanie jest:",
                                                        answers: [
                                                            "znakomite",
                                                            "umiarkowane", 
                                                            "bardzo słabe",
                                                            "zdecydowanie nieodpowiednie"
                                                        ],
                                                        correct: 0,
                                                        explanation: "RMSEA (Root Mean Square Error of Approximation) poniżej 0.08 oznacza dobre dopasowanie modelu, a wartość 0.06 jest uznawana za znakomite dopasowanie."
                                                    },
                                                    {
                                                        question: "Jako podstawę do badania trafności teoretycznej za pomocą analizy różnic międzygrupowych można zastosować:",
                                                        answers: [
                                                            "badanie samoopisu skalą samooceny (SES) w grupie z rozpoznaną depresją kliniczną i w grupie zdrowej, wyrównanych ze względu na płeć i wiek",
                                                            "badanie samoopisu i szacowania skalą samooceny (SES) Morrisa Rosenberga",
                                                            "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga przed eksperymentem - w którym badani doświadczali porażek albo sukcesów - i po nim",
                                                            "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga bez przerwy czasowej"
                                                        ],
                                                        correct: 0,
                                                        explanation: "Analiza różnic międzygrupowych jest właściwą metodą badania trafności teoretycznej, gdy porównujemy grupy różniące się ze względu na mierzony konstrukt (np. grupa kliniczna vs. kontrolna), przy czym grupy powinny być wyrównane pod względem innych istotnych zmiennych."
                                                    },
                                                    {
                                                        question: "Gdy autor przeprowadził analizę CFA, zidentyfikował w swojej skali pozycję o najwyższym ładunku równym 0,70. Jeśli autor usunie tę pozycję ze skali, wysokość omegi MacDonalda najprawdopodobniej:",
                                                        answers: [
                                                            "zmniejszy się",
                                                            "zwiększy się",
                                                            "nie zmieni się",
                                                            "nie wiadomo co się stanie, bo ładunki czynnikowe i omega MacDonalda zależą od zupełnie innych aspektów testu"
                                                        ],
                                                        correct: 0,
                                                        explanation: "Usunięcie pozycji o wysokim ładunku czynnikowym spowoduje zmniejszenie się współczynnika rzetelności omegi MacDonalda, ponieważ pozycje o wysokich ładunkach wnoszą najwięcej do ogólnej spójności skali."
                                                    },
                                                    {
                                                        question: "Analiza czynnikowa:",
                                                        answers: [
                                                            "polega na eksploracji danych, a następnie ekstrapolacji uzyskanego rozwiązania",
                                                            "to metoda analizy danych, w której identyfikujemy mniejszą liczbę wymiarów w większym zbiorze pozycji w teście",
                                                            "powinna być stosowana do budowy testów składających się z pytań o zróżnicowanej trudności",
                                                            "składa się z dwóch etapów - analizy wariancji i ekstrapolacji"
                                                        ],
                                                        correct: 1,
                                                        explanation: "Analiza czynnikowa jest metodą redukcji danych, która pozwala na identyfikację ukrytych wymiarów (czynników) w większym zbiorze zmiennych, co umożliwia uproszczenie struktury danych przy zachowaniu maksimum informacji."
                                                    },
                                                    {
                                                        question: "Jedna ze strategii adaptacji kulturowej testu jest rekonstrukcja, która polega na:",
                                                        answers: [
                                                            "opracowaniu zupełnie nowego testu, dla którego inspiracją jest oryginalny model teoretyczny i strategia konstrukcji",
                                                            "opracowaniu zupełnie nowego testu, dla którego inspiracją jest test oryginalny i większość itemów jest generowana na podstawie pozycji oryginalnych",
                                                            "przekładzie oryginalnych pozycji testu niedopuszczającym żadnych modyfikacji",
                                                            "przekładzie oryginalnych pozycji testu dopuszczającym wszystkie modyfikacje, które badacz uważa za niezbędne"
                                                        ],
                                                        correct: 0,
                                                        explanation: "Rekonstrukcja to najbardziej radykalna forma adaptacji, która polega na stworzeniu całkowicie nowego narzędzia, zachowując jedynie oryginalny model teoretyczny i strategię konstrukcji, bez bezpośredniego tłumaczenia itemów."
                                                    },
                                                    {
                                                        question: "Gdy podczas walidacji chcemy porównać rozwiązanie trójczynnikowe i dwuczynnikowe, to precyzyjne parametry uzyskamy w wyniku analizy:",
                                                        answers: [
                                                            "EFA",
                                                            "CFA",
                                                            "AUC",
                                                            "ROC"
                                                        ],
                                                        correct: 1,
                                                        explanation: "Konfirmacyjna analiza czynnikowa (CFA) pozwala na precyzyjne porównanie dopasowania różnych modeli czynnikowych poprzez analizę wskaźników dopasowania."
                                                    },
                                                    {
                                                        question: "Zalecana rzetelność testów przeznaczonych do badań naukowych wynosi:",
                                                        answers: [
                                                            "poniżej 0,05",
                                                            "poniżej 0,01",
                                                            "powyżej 0,7",
                                                            "powyżej 0,95"
                                                        ],
                                                        correct: 2,
                                                        explanation: "Minimalna akceptowalna wartość współczynnika rzetelności dla testów używanych w badaniach naukowych wynosi 0,7. Wartość ta zapewnia, że co najmniej 49% wariancji wyników zależy od rzeczywistego zróżnicowania, a nie od błędu pomiaru."
                                                    },
                                                    {
                                                        question: "Testy, których nie poddano pełnej procedurze adaptacji kulturowej (np. nie mają opracowanych polskich norm), można stosować wyłącznie:",
                                                        answers: [
                                                            "w odniesieniu do pojedynczych osób",
                                                            "w rekrutacji i selekcji",
                                                            "wśród młodzieży szkolnej",
                                                            "w badaniach naukowych"
                                                        ],
                                                        correct: 3,
                                                        explanation: "Testy bez pełnej adaptacji kulturowej i norm mogą być stosowane wyłącznie w badaniach naukowych, gdzie nie podejmuje się decyzji o jednostkach, a wyniki są analizowane na poziomie grupowym."
                                                    },
                                                    {
                                                        question: "Badacz przeprowadził analizę EFA na próbie 370 osób badanych. Następnie na tej samej próbie przetestował za pomocą analizy CFA dopasowanie do modelu wyodrębnionego podczas analizy EFA. Uzyskał bardzo wysoki poziom dopasowania. Badacz postąpił:",
                                                        answers: [
                                                            "słusznie - ponieważ należy maksymalnie wykorzystać zebrane dane",
                                                            "słusznie - ponieważ analizy EFA i CFA należy stosować jednocześnie",
                                                            "niesłusznie - ponieważ analizę CFA należało przeprowadzić na innej próbie",
                                                            "niesłusznie - ponieważ najpierw powinien wykonać analizę CFA, a później analizę EFA"
                                                        ],
                                                        correct: 2,
                                                        explanation: "Jest to błędne podejście metodologiczne, ponieważ CFA służy do potwierdzenia struktury na nowej próbie. Użycie tej samej próby do EFA i CFA prowadzi do sztucznego zawyżenia wskaźników dopasowania."
                                                    },
                                                    {
                                                        question: "Każdy współczynnik rzetelności można interpretować jako:",
                                                        answers: [
                                                            "odsetek wariancji wyników prawdziwych determinowanych przez wyniki otrzymane",
                                                            "odsetek wariancji wyników otrzymanych determinowanych przez wyniki prawdziwe",
                                                            "współczynnik zbieżności",
                                                            "współczynnik rozbieżności"
                                                        ],
                                                        correct: 1,
                                                        explanation: "Współczynnik rzetelności podniesiony do kwadratu informuje, jaki procent wariancji wyników otrzymanych jest determinowany przez wyniki prawdziwe."
                                                    },
                                                    {
                                                        question: "Co oznacza skrót AUC?",
                                                        answers: [
                                                            "pole pod krzywą ROC",
                                                            "pole pod krzywą osypiska",
                                                            "analiza ujemnej częstości",
                                                            "analiza unikalnej pewności"
                                                        ],
                                                        correct: 0,
                                                        explanation: "AUC (Area Under Curve) oznacza pole pod krzywą ROC (Receiver Operating Characteristic). Jest to wskaźnik ogólnej trafności diagnostycznej testu, przyjmujący wartości od 0 do 1."
                                                    },
                                                    {
                                                        question: "Zmienne latentne na diagramie ścieżkowym reprezentowane są jako:",
                                                        answers: [
                                                            "prostokąty",
                                                            "okręgi",
                                                            "strzałki jednokierunkowe",
                                                            "strzałki dwukierunkowe"
                                                        ],
                                                        correct: 1,
                                                        explanation: "W diagramach ścieżkowych zmienne latentne (ukryte) reprezentowane są jako okręgi lub elipsy, natomiast zmienne obserwowalne jako prostokąty."
                                                    },
                                                    {
                                                        question: "Konfirmacyjna analiza czynnikowa:",
                                                        answers: [
                                                            "zwykle jest stosowana, by wstępnie wyodrębnić czynniki w bazie zebranych danych psychometrycznych",
                                                            "pozwala precyzyjnie potwierdzić lub odrzucić testowany model",
                                                            "nakłada jedynie minimum restrykcji na zakładany model czynnikowy",
                                                            "żadna odpowiedź nie jest poprawna"
                                                        ],
                                                        correct: 1,
                                                        explanation: "CFA jest metodą weryfikacyjną, która pozwala na precyzyjne testowanie dopasowania określonego modelu teoretycznego do danych empirycznych poprzez szereg wskaźników dopasowania."
                                                    },
                                                    {
                                                        question: "Metoda badania wewnętrznej struktury testu jest:",
                                                        answers: [
                                                            "metodą badania jego trafności",
                                                            "metodą badania jego rzetelności",
                                                            "odmianą analizy itemmetrycznej stosowaną podczas budowy testu według zewnętrznej strategii konstruowania",
                                                            "żadna odpowiedź nie jest poprawna"
                                                        ],
                                                        correct: 0,
                                                        explanation: "Badanie wewnętrznej struktury testu jest jedną z metod analizy trafności teoretycznej, pozwalającą sprawdzić, czy struktura empiryczna odpowiada założeniom teoretycznym."
                                                    },
                                                    {
                                                        question: "Jeśli autorzy piszą, że oszacowali stabilność bezwzględną jako miarę rzetelności testu psychologicznego, to obliczyli:",
                                                        answers: [
                                                            "alfę Cronbacha",
                                                            "korelacje między wersjami równoległymi testu, badanymi z odstępem czasu",
                                                            "korelacje między dwoma badaniami tym samym testem z odstępem czasu",
                                                            "korelacje między dwoma badaniami tym samym testem bez odstępu czasu"
                                                        ],
                                                        correct: 2,
                                                        explanation: "Stabilność bezwzględna to metoda szacowania rzetelności poprzez korelację wyników tego samego testu przeprowadzonego dwukrotnie na tej samej grupie osób z odstępem czasowym (test-retest)."
                                                    },
                                                    {
                                                        question: "Macierz wielu cech - wielu metod wykorzystujemy:",
                                                        answers: [
                                                            "na etapie planowania i generowania pozycji testu",
                                                            "na etapie planowania i przeprowadzania badań normalizacyjnych",
                                                            "na etapie planowania i przeprowadzania badań walidacyjnych",
                                                            "aby wybrać odpowiednią strategię konstrukcji testu"
                                                        ],
                                                        correct: 2,
                                                        explanation: "Macierz wielu cech - wielu metod (MTMM) jest narzędziem wykorzystywanym w badaniach walidacyjnych do oceny trafności zbieżnej i różnicowej testu."
                                                    },
                                                    {
                                                        question: "Aspekt zbieżny i różnicowy dotyczy analizy trafności:",
                                                        answers: [
                                                            "treściowej",
                                                            "teoretycznej",
                                                            "kryterialnej",
                                                            "czynnikowej"
                                                        ],
                                                        correct: 1,
                                                        explanation: "Aspekt zbieżny i różnicowy są elementami analizy trafności teoretycznej, gdzie badamy korelacje testu z innymi narzędziami mierzącymi podobne (zbieżność) i odmienne (różnicowość) konstrukty."
                                                    },
                                                    {
                                                        question: "Podczas konfirmacyjnej analizy czynnikowej dokonujemy:",
                                                        answers: [
                                                            "oceny stopnia zrozumiałości pozycji",
                                                            "wyboru pomiędzy modelem ukośnym a ortogonalnym",
                                                            "oceny sędziów kompetentnych",
                                                            "obliczenia błędu aproksymacji (RMSEA)"
                                                        ],
                                                        correct: 3,
                                                        explanation: "W CFA jednym z kluczowych wskaźników dopasowania modelu jest RMSEA (Root Mean Square Error of Approximation), który ocenia błąd aproksymacji modelu."
                                                    },
                                                    {
                                                        question: "Metodę adaptacji testu psychologicznego, która polega na maksymalnie wiernym tłumaczeniu oryginalnych pozycji, nazywamy:",
                                                        answers: [
                                                            "transkrypcją",
                                                            "trawestacją",
                                                            "rekonstrukcją",
                                                            "translacją"
                                                        ],
                                                        correct: 0,
                                                        explanation: "Transkrypcja to najbardziej zachowawcza strategia adaptacji testu, polegająca"
                                                    }
        ]
    }]
} as const;

export default quiz;



