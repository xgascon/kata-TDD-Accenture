// *3 -> fizz, *5 -> buzz; *3&*5 -> fizzbuzz

function fizzbuzz(nombre){
    if(nombre === 3){
        return 'fizz'
    }
    return nombre
};

describe("fizzbuzz", () => {
    it("Pour 1 renvoie 1", () => {
        // Given
        const nombre = 1
        // When
        const result = fizzbuzz(nombre)
        // Then
        expect(result).toEqual(1)
    })
    it("Pour 2 renvoie 2", () => {
        // Given
        const nombre = 2
        // When
        const result = fizzbuzz(nombre)
        // Then
        expect(result).toEqual(2)
    })
    it("Pour 3 renvoie fizz", () => {
        // Given
        const nombre = 3
        // When
        const result = fizzbuzz(nombre)
        // Then
        expect(result).toEqual('fizz')
    })
})
