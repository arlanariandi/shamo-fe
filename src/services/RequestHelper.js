export default async (request, thunkAPI) => {
    try {
        const result = await request()
        return result
    } catch (error) {
        return thunkAPI.rejectedWithValue(error)
    }
}
