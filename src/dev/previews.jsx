import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import Header from '~/components/Layout/components/Header';
import Button from '~/components/Button';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/Header">
                <Header />
            </ComponentPreview>
            <ComponentPreview path="/Button">
                <Button />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
