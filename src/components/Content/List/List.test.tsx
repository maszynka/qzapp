import React from "react";

import { List } from "./List";

// import { mount } from "enzyme";

import renderer from "react-test-renderer";

import { MemoryRouter } from "react-router";

const data = {
    match: { path: "/psycho", url: "/psycho", isExact: true, params: {} },
    entries: [
        { label: "Ogólna", alias: "general" },
        {
            label: "Poznawcza",
            alias: "cognitive",
            quizzes: [
                {
                    label: "Poznawcza test 2014",
                    alias: "cognitive2014",
                    questions: [
                        {
                            question:
                                "Informacja to sygnał lub wiadomość (komunikat), który",
                            answers: [
                                "Zmienia sposób kodowania",
                                "Zwiększa różnorodność",
                                "Redukuje lub eliminuje niepewność",
                                "Nie redukuje poziomu szumu w kanale informacjii"
                            ],
                            correct: 3,
                            explanation:
                                "Mając brak jakiejkolwiek informacjii posiadamy pełną losowość/dowolność/entropię. Dostając informację coś już wiemy więc redukowana jest niepewność (jest mniej niepewnośći)."
                        },
                        {
                            question:
                                "Jakim rezultatem nie kończy się myślenie w fazie generacjii",
                            answers: [
                                "Tworzeniem nowych pomysłów",
                                "Kolejnym wykluczaniem pomysłów",
                                "Zmianą giętkości poszukiwania pomysłów",
                                "Swobodnym kojarzeniem"
                            ],
                            correct: 2,
                            explanation: ":("
                        }
                    ]
                }
            ]
        }
    ],
    type: "groups"
};

test("<List /> snapshot matches last version", () => {
    //renderer or mount?
    const tree = renderer
        .create(
            <MemoryRouter initialEntries={["/psycho"]} initialIndex={0}>
                <List {...data} />
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
