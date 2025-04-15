import { Button, Field, Input, Stack } from "@chakra-ui/react";


//Submit Handler
const onSubmit = async (data: any) => {
    const { firstName, lastName } = data;
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  }

function BiodataPage() { 

    return (
      <>
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" maxW="sm">
            <Field.Root >
            <Field.Label>First name</Field.Label>
            <Input />
            {/* <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText> */}
            </Field.Root>

            <Field.Root >
            <Field.Label>Last name</Field.Label>
            <Input/>
            {/* <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText> */}
            </Field.Root>
            
            <Field.Root >
            <Field.Label>Address</Field.Label>
            <Input/>
            {/* <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText> */}
            </Field.Root>

            <Button type="submit">Submit</Button>
        </Stack>
        </form>
      </>
    )
  }
  
export default BiodataPage
