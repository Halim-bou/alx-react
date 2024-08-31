import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('expected year', () => {
    expect(getFullYear()).toBe(2024);
});
test('footer text', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});
test('lastest notification', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})