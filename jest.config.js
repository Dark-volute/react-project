module.exports = {
    verbose: true,
    clearMocks: false,
    collectCoverage: false,
    reporters: ["default"],
    coverageReporters:['html'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules', 'include'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/mocks/file-mock.js",
        "\\.(css|less|sass|scss)$": "<rootDir>/test/mocks/object-mock.js",
    },
    testMatch: ['<rootDir>/**/**/*.test.(js|jsx|ts|tsx)'],
    // transform: {
    //     "^.+unit\\.(js|jsx)$": "babel-jest",
    //     '^.+\\.(ts|tsx)$': 'ts-jest',
    // },
    setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}
